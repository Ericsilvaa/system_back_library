const db = require("../../../models");
const Services = require("../Services");

class UserRegister extends Services {
  constructor() {
    super("Usuarios");
  }
}

module.exports = UserRegister;
