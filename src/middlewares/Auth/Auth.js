const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { validateToken } = require("../Users/token");

class Auth {
  static async isMember(req, res, next) {
    const authHeader = req.headers.authorization;
    const tokenCookie = req.headers.cookie;
    // verificar se existe algum token de validação
    try {
      if (!validateToken(tokenCookie)) throw new Error("Error");
    } catch (error) {
      return res.status(403).json({
        erro: true,
        message: "Token invalida, faça login novamente!",
      });
    }

    if (!authHeader)
      return res.status(400).json({
        erro: true,
        message: "Erro: Necessário realizar login para acessar a página!",
      });

    const [bearer, token] = authHeader.split(" ");
    if (!token) {
      return res.status(403).json({
        erro: true,
        message: "Erro: Usuario não autorizado, token incorrect",
      });
    }

    try {
      // const decode = await promisify(jwt.verify)(token, key_secret);
      const decode = validateToken(token);

      // atribuindo para recuperar em qualquer local da aplicação
      req.userEmail = decode.email;
      return next();
    } catch (error) {
      return res.status(403).json({
        erro: true,
        message: "Erro: Token Invalido",
      });
    }
  }
}

module.exports = Auth;
