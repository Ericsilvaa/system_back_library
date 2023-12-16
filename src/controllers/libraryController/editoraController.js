const { EditoraService } = require("../../services");
const editoras = new EditoraService();

class EditoraController {
  static async cadastrarEditora(req, res) {
    const novoEditora = req.body;

    try {
      const [editora, created] = await editoras.encontrarOuCriarRegistro({
        where: { nome_editora: novoEditora.nome_editora },
        defaults: novoEditora,
      });
      if (created) return res.status(201).json(editora);

      res
        .status(200)
        .json({ message: `A Editora ${editora.nome_editora} já existe!` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async pegarTodasEditoras(req, res) {
    try {
      const todasLivros = await editoras.encontrarTodosRegistros({});

      res.status(200).json(todasLivros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async pegarUmaEditora(req, res) {
    const { editoraId } = req.params;

    try {
      const unicaEditora = await editoras.encontrarRegistroUnico(editoraId);

      res.status(200).json(unicaEditora);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizarEditora(req, res) {
    const { editoraId } = req.params;
    const dadosAtualizados = req.body;
    try {
      await editoras.atualizarRegistro(dadosAtualizados, editoraId);

      const editoraAtualizado = await editoras.encontrarRegistroUnico(
        editoraId
      );

      res.status(200).json(editoraAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletarEditora(req, res) {
    const { editoraId } = req.params;
    try {
      const deletePerson = await editoras.deletarRegistro(editoraId);

      return res.status(200).json({
        user_delete: deletePerson,
        message: "book deleted successfully",
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async restaurarEditoraRemovido(req, res) {
    const { editoraId } = req.params;

    try {
      const restaurarLivro = await editoras.restaurarRegistro(editoraId);

      return res.status(200).json({
        user_delete: restaurarLivro,
        message: "book restoured successfully",
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = EditoraController;
