"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Livros.belongsTo(models.Autores, {
        foreignKey: "nome_autor",
      });

      Livros.belongsTo(models.Editoras, {
        foreignKey: "nome_editora",
      });
    }
  }
  Livros.init(
    {
      nome_livro: DataTypes.STRING,
      numero_paginas: DataTypes.INTEGER,
      nome_autor: DataTypes.STRING,
      description: DataTypes.STRING,
      nome_editora: DataTypes.STRING,
      available: DataTypes.BOOLEAN,
      qtd_emprestimos: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Livros",
      paranoid: true,
    }
  );
  return Livros;
};
