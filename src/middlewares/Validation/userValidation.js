const bcrypt = require("bcrypt");
// validando user
const userValidation = (data) => {
  const { nome, sobrenome, email, password, confirmPassword } = data;
  let senha_hash;

  if (!nome || !email || !password || !confirmPassword) return false;
  if (password !== confirmPassword) {
    return false;
  } else {
    const encryptPassword = (passwordCrypt) => {
      // salt serve para ser gerado hashs ..
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(passwordCrypt, salt);
    };
    senha_hash = encryptPassword(password);
  }
  return { nome, sobrenome, email, senha_hash };
};

const userCompareSenha = async (senhaBody, senhaDb) =>
  await bcrypt.compare(senhaBody, senhaDb);

// const userCompareSenha = (senhaBody, senhaDb) => {
//   const compare = bcrypt.compareSync(senhaBody, senhaDb, (err, data) => {
//     console.log("senhaDb", senhaDb);
//     console.log("senhaBody", senhaBody);

//     console.log("data", data);
//     if (err) return null;
//     if (data) {
//       console.log("data", data);
//       return { msg: "login successful" };
//     } else {
//       return { msg: "invalid credential" };
//     }
//   });
// };

module.exports = { userCompareSenha, userValidation };
