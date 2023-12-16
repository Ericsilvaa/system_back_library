const { Router } = require("express");
const LivroController = require("../../controllers/libraryController/livroController.js");
const Auth = require("../../middlewares/Auth/Auth.js");

const router = Router();

// commands users default
router.get("/livraria/livros", Auth.isMember, LivroController.pegarTodosLivros);
router.get(
  "/livraria/livros/:livroId",
  Auth.isMember,
  LivroController.pegarUmLivro
);

// comandos users admins
router.post("/livros/cadastrar", LivroController.cadastrarLivro);
router.post(
  "/livros/:livroId/restaura",
  LivroController.restaurarLivroRemovido
);
router.put("/livros/:livroId/atualizar", LivroController.atualizarLivro);
router.delete("/livros/:livroId/deletar", LivroController.deletarLivro);

module.exports = router;
