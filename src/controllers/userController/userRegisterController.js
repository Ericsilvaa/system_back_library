const UserRegister = require("../../services/userService/UserServices");
const userRegister = new UserRegister();

const {
  userCompareSenha,
  userValidation,
} = require("../../middlewares/Validation/userValidation");

const { gerarToken, validateToken } = require("../../middlewares/Users/token");
const PasswordHelper = require("../../helpers/passwordHelper");
const Jwt = require("jsonwebtoken");
const secret = process.env.NODE_ENV_JWT_SECRET_KEY;

class UserRegistersController {
  static async registerUser(req, res, next) {
    // * Validação de dados
    const userValid = userValidation(req.body);

    if (userValid) {
      try {
        const token_de_validacao = gerarToken(userValid);
        // * criar usuario no banco de dados e inserir token no cookie e no banco
        const [user, created] = await userRegister.encontrarOuCriarRegistro({
          where: { email: userValid.email },
          defaults: { ...userValid, token_de_validacao },
        });

        if (created) {
          res
            .cookie("token_de_validacao", token_de_validacao, {})
            .status(200)
            .json({ message: "Usuario Criado" });
        } else {
          // redirecionar para pagina login
          throw new Error({ message: "Já existe um registro com esse email!" });
        }
      } catch (error) {
        res.status(403).json({ message: error.message });
      }
    }
  }

  static async login(req, res, next) {
    const { email, senha_hash } = req.body;
    try {
      const { dataValues } = await userRegister.encontrarRegistroUnico({
        where: { email },
      });

      if (!dataValues) throw new Error("Invalid Email!");

      const match = await PasswordHelper.comparePassword(
        senha_hash,
        dataValues.senha_hash
      );

      if (!match) throw new Error("O usuario e senha invalidos!");

      const token = Jwt.sign(
        {
          nome: dataValues.nome,
          email: dataValues.email,
          id: dataValues.id,
          admin: dataValues.admin,
        },
        secret
      );

      res
        .cookie("access_token", "Bearer " + token, {})
        .status(200)
        .send(`User Authorized ${token}`);
      return;
    } catch (error) {
      res.status(403).send({ message: error.message });
    }
  }
}

module.exports = UserRegistersController;
