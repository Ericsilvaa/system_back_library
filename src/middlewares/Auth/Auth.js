const jwt = require("jsonwebtoken");
class Auth {
  static async isMember(req, res, next) {
    const tokenHeader = req.headers.authorization;
    const [bearer, token] = tokenHeader.split(" ");
    const secret = process.env.NODE_ENV_JWT_SECRET_KEY;

    try {
      if (!jwt.verify(token, secret)) {
        throw new Error("Invalid authorization");
      }

      next();
      return;
    } catch (err) {
      return res.status(401).json({
        erro: true,
        message: "Token invalid, faça login novamente!",
      });
    }
  }
}

module.exports = Auth;
