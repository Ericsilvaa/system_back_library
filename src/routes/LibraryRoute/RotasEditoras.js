const { Router } = require("express");

// Controllers
const EditoraController = require("../../controllers/libraryController/editoraController");
const Auth = require("../../middlewares/Auth/Auth");

const router = Router();

// usuarios defaults
router.get(
  "/livraria/editoras",
  Auth.isMember,
  EditoraController.pegarTodasEditoras
);
router.get(
  "/livraria/editoras/:editoraId",
  Auth.isMember,
  EditoraController.pegarUmaEditora
);

// usuarios admins
router.post("/autores/cadastrar", EditoraController.cadastrarEditora);
router.post(
  "/editoras/:editoraId/restaura",
  EditoraController.restaurarEditoraRemovido
);
router.put(
  "/editoras/:editoraId/atualizar",
  EditoraController.atualizarEditora
);
router.delete("/editoras/:editoraId/deletar", EditoraController.deletarEditora);

module.exports = router;
