const { AutorService } = require("../../services");
const autores = new AutorService();

class AutorController {
  static async cadastrarAutor(req, res) {
    const novoAutor = req.body;

    try {
      const [autor, created] = await autores.encontrarOuCriarRegistro({
        where: { nome_autor: novoAutor.nome_autor },
        defaults: {
          novoAutor,
        },
      });
      if (created) return res.status(201).json(autor);

      res
        .status(200)
        .json({ message: `O autor ${autor.nome_autor} já existe!` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async pegarTodosAutores(req, res) {
    try {
      const todasLivros = await autores.encontrarTodosRegistros({});

      res.status(200).json(todasLivros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async pegarUmAutor(req, res) {
    const { autorId } = req.params;

    try {
      const unicoLivro = await autores.encontrarRegistroUnico(autorId);

      res.status(200).json(unicoLivro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizarAutor(req, res) {
    const { autorId } = req.params;
    const dadosAtualizados = req.body;
    try {
      await autores.atualizarRegistro(dadosAtualizados, autorId);

      const autorAtualizado = await autores.encontrarRegistroUnico(autorId);

      res.status(200).json(autorAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletarAutor(req, res) {
    const { autorId } = req.params;
    try {
      const deletePerson = await autores.deletarRegistro(autorId);

      return res.status(200).json({
        user_delete: deletePerson,
        message: "book deleted successfully",
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async restaurarAutorRemovido(req, res) {
    const { autorId } = req.params;

    try {
      const restaurarLivro = await autores.restaurarRegistro(autorId);

      return res.status(200).json({
        user_delete: restaurarLivro,
        message: "book restoured successfully",
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = AutorController;
