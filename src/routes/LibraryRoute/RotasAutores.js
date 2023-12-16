const { Router } = require("express");
const AutorController = require("../../controllers/libraryController/autorController");
const Auth = require("../../middlewares/Auth/Auth");

// Controller

const router = Router();

// usuarios normais
router.get(
  "/livraria/autores",
  Auth.isMember,
  AutorController.pegarTodosAutores
);
router.get(
  "/livraria/autores/:autorId",
  Auth.isMember,
  AutorController.pegarUmAutor
);

// somente admin!!!
router.post("/autores/cadastrar", AutorController.cadastrarAutor);
router.post(
  "/autores/:autorId/restaura",
  AutorController.restaurarAutorRemovido
);
router.put("/autores/:autorId/atualizar", AutorController.atualizarAutor);
router.delete("/autores/:autorId/deletar", AutorController.deletarAutor);

module.exports = router;
