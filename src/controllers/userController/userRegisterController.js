const UserRegister = require("../../services/userService/UserServices");
const userRegister = new UserRegister();

const {
  userCompareSenha,
  userValidation,
} = require("../../middlewares/Validation/userValidation");

const { gerarToken, validateToken } = require("../../middlewares/Users/token");

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

  static async signIn(req, res, next) {
    const { email, senha_hash } = req.body;
    try {
      const userLoginValid = await userRegister.encontrarRegistroUnico({
        where: { email: email },
      });
      if (!userLoginValid) throw new Error("Invalid Email!");
      if (await userCompareSenha(senha_hash, userLoginValid.senha_hash)) {
        const token_de_validacao = gerarToken(userLoginValid);
        // enviar para db e para o cookie o novo token
        userRegister.atualizarRegistro(
          { token_de_validacao },
          {
            where: { email: email },
          }
        );

        res
          .cookie("token_de_validacao", token_de_validacao, {})
          .status(200)
          .send("User Authorized");
      } else {
        throw new Error("Password Incorrect!");
      }
    } catch (error) {
      res.status(403).send({ message: error.message });
    }
  }
}

module.exports = UserRegistersController;
