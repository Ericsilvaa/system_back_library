const jwt = require("jsonwebtoken");
// gerandoToken
const gerarToken = ({ nome, sobrenome, email }) => {
  const secret = process.env.NODE_ENV_JWT_SECRET_KEY;
  const timeExpires = "5m";

  const payload = {
    nome,
    sobrenome,
    email,
  };

  const options = {
    expiresIn: timeExpires,
  };

  return jwt.sign(payload, secret, options);
};

// verificando token valido
const validateToken = (token) => {
  const secret = process.env.NODE_ENV_JWT_SECRET_KEY;
  /* 
  se Valido:
    tokenValid {
      name: 'EricSilva',
      email: 'eric@eric.com',
      password: '123456',
      iat: 1694898424,
      exp: 1694898464
    }
*/
  return jwt.verify(token, secret);
};

module.exports = { gerarToken, validateToken };
