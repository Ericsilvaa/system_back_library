const { LivrosService } = require("../../services");
const livros = new LivrosService();

class LivroController {
  static async pegarTodosLivros(req, res) {
    try {
      const todasLivros = await livros.encontrarTodosRegistros({});

      res.status(200).json(todasLivros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async pegarUmLivro(req, res) {
    const { livroId } = req.params;

    try {
      const unicoLivro = await livros.encontrarRegistroUnico(livroId);

      res.status(200).json(unicoLivro);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;

    try {
      const [autor, created] = await livros.encontrarOuencontrarOuCriarRegistro(
        {
          where: { nome_livro: novoLivro.nome_livro },
          defaults: novoLivro,
        }
      );
      if (created) return res.status(201).json(autor);
      res
        .status(200)
        .json({ message: `O autor ${autor.nome_autor} já existe!` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async atualizarLivro(req, res) {
    const { livroId } = req.params;
    const dadosAtualizados = req.body;
    try {
      await livros.atualizarRegistro(dadosAtualizados, livroId);

      const livroAtualizado = await livros.encontrarRegistroUnico(livroId);

      res.status(200).json(livroAtualizado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deletarLivro(req, res) {
    const { livroId } = req.params;
    try {
      // return quantity of the items deleted
      const deletePerson = await livros.deletarRegistro(livroId);

      return res.status(200).json({
        user_delete: deletePerson,
        message: "book deleted successfully",
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }

  static async restaurarLivroRemovido(req, res) {
    const { livroId } = req.params;

    try {
      // return quantity of the items deleted
      const restauraLivro = await livros.restaurarRegistro(livroId);

      return res.status(200).json({
        user_delete: restauraLivro,
        message: "book restoured successfully",
      });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

module.exports = LivroController;
