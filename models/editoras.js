"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Editoras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Editoras.hasMany(models.Livros, {
        foreignKey: "nome_editora",
      });
    }
  }
  Editoras.init(
    {
      nome_editora: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Editoras",
      paranoid: true,
    }
  );
  return Editoras;
};
