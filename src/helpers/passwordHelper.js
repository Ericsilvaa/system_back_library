const Bcrypt = require("bcrypt");
const { promisify } = require("util");
const hashAsync = promisify(Bcrypt.hash);
const compareAsync = promisify(Bcrypt.compare);
const SALT_KEY = process.env.SALT_KEY;

class PasswordHelper {
  static hashPassword(pass) {
    return hashAsync(pass, SALT_KEY);
  }
  static comparePassword(pass, hash) {
    return compareAsync(pass, hash);
  }
}

module.exports = PasswordHelper;
