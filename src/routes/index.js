const express = require("express");
const cookieParser = require("cookie-parser");

const Auth = require("../middlewares/Auth/Auth.js");

const RoutesAutores = require("./LibraryRoute/RotasAutores.js");
const RoutesEditoras = require("./LibraryRoute/RotasEditoras.js");
const RoutesLivros = require("./LibraryRoute/RotasLivros.js");
const RoutesUser = require("./UserRoute/RotasUser.js");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Home Page IBHJ!");
  });

  app.get("/livraria", Auth.isMember, (req, res) => {
    res.status(200).send("Welcome to the Library IBHJ");
  });

  app.use(
    express.json(),
    cookieParser(),
    RoutesUser,
    RoutesAutores,
    RoutesEditoras,
    RoutesLivros
  );
};
