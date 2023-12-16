"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Livros",
      [
        {
          nome: "Eric",
          sobrenome: "Oliveira",
          email: "eric@eric.com",
          senha_hash:
            "$2b$10$R8YGoJeFRXwz/jlXmtRkPOnMSBbJ7Oj3k9cJpBhWE8H2btgm3TUge",
          token_de_validacao:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiRXJpYyIsInNvYnJlbm9tZSI6Ik9saXZlaXJhIiwiZW1haWwiOiJlcmljQGVyaWMuY29tIiwiaWF0IjoxNjk1MDUyODc4LCJleHAiOjE2OTUwNTMxNzh9.jx9ffKCu9J_Qu0YLzTRwM-AubLbj0ZX1fnDvxzFhWjo",
        },
        ,
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Livros", null, {});
  },
};
