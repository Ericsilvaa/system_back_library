const { where } = require("sequelize");
const db = require("../../models");

class Services {
  constructor(nomeModel) {
    this.nomeModel = nomeModel;
  }

  // create
  async encontrarOuCriarRegistro(dados) {
    console.log("dados", dados);

    return db[this.nomeModel].findOrCreate(dados);
  }

  // read
  async encontrarTodosRegistros(where) {
    return db[this.nomeModel].findAll(where);
  }

  async encontrarRegistroUnico(where) {
    return db[this.nomeModel].findOne(where);
  }

  // update
  async atualizarRegistro(dadosAtualizados, where) {
    return db[this.nomeModel].update(dadosAtualizados, where);
  }

  // delete
  async deletarRegistro(id) {
    return db[this.nomeModel].destroy({ where: { id } });
  }

  async restaurarRegistro(id) {
    return db[this.nomeModel].restore({ where: { id } });
  }
}

module.exports = Services;
