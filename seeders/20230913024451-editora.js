"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Editoras",
      [
        {
          nome_editora: "Thomas Nelson",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_editora: "Vida",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_editora: "Fiel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_editora: "Vida Nova",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_editora: "Mundo Cristão",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Editoras", null, {});
  },
};
