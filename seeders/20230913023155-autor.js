"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Autores",
      [
        {
          nome_autor: "Hernandes Dias Lopes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_autor: "John Piper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_autor: "Yago Martins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_autor: "Jonathan Edwards",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_autor: "John Bunyan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Autores", null, {});
  },
};
