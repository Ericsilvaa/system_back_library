"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Livros",
      [
        {
          nome_livro: "Santidade",
          numero_paginas: 416,
          nome_autor: 6,
          description:
            "A santidade é um assunto que parece estar relegado à seção de história dos assuntos religiosos contemporâneos; aliás, o termo santidade parece estranho a muitos cristãos hoje e remete à idéia de homens e mulheres angelicais, imaculados e semi-perfeitos de uma era remota da história cristã.Esta situação torna urgente e atualíssima esta obra clássica de J. C. Ryle, publicada pela primeira vez na Inglaterra em 1879. O problema do pecado - sua seriedade e malignidade - tratado com maestria logo no primeiro capítulo, é apresentado como a barreira intransponível que impede nossa comunhão com Deus.O sacrifício propiciatório de Cristo na cruz remove esta barreira; agora precisamos que a santidade de Deus nos seja comunicada pelo Espírito e exercida por nós, para que possamos, como diz o autor da epístola aos Hebreus, ver o Senhor. ",
          nome_editora: 3,
          available: true,
          qtd_emprestimos: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_livro: "Adoração: Prioridade, Princípios e Prática",
          numero_paginas: 46,
          nome_autor: 6,
          description:
            "Neste livreto J. C. Ryle oferece ao leitor, um guia simples e prático de princípios que promovem uma adoração cheia do Espírito, centrada em Cristo, que honra a Deus e nos enche de alegria. Embora esta jóia da literatura cristã tenha sido publicada originalmente no fim do século XIX, sua mensagem permanece atual e relevante - e de grande necessidade para os nosso dias.",
          nome_editora: 3,
          available: true,
          qtd_emprestimos: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_livro: "Deus deseja que todos sejam salvos?",
          numero_paginas: 92,
          nome_autor: 2,
          description:
            "Neste breve ensaio teológico, John Piper desenvolve um sólido argumento bíblico em favor da compatibilidade entre a doutrina da eleição incondicional e o genuíno desejo e oferta de Deus para que todos sejam salvos. Dando sentido a esta relação aparentemente paradoxal, Piper explora o sentido bíblico deste difícil tema, de modo cuidadoso e gracioso, motivando todos os cristãos a proclamarem com paixão a livre oferta do evangelho a todos os povos.",
          nome_editora: 3,
          available: true,
          qtd_emprestimos: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_livro: "O fim para o qual Deus criou o mundo",
          numero_paginas: 144,
          nome_autor: 5,
          description:
            "O fim para o qual Deus criou o mundo apresenta ao leitor uma aula de argumentação filosófica e exposição bíblica a respeito de uma inquietação do autor: Com que finalidade Deus criou o mundo? O que ele tinha em mente ao arquitetar uma criação tão vasta e bela? E que implicações a resposta à questão central da obra oferece para o leitor?",
          nome_editora: 5,
          available: true,
          qtd_emprestimos: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_livro: "A Verdadeira Obra do Espírito",
          numero_paginas: 104,
          nome_autor: 5,
          description:
            "O fim para o qual Deus criou o mundo apresenta ao leitor uma aula de argumentação filosófica e exposição bíblica a respeito de uma inquietação do autor: Com que finalidade Deus criou o mundo? O que ele tinha em mente ao arquitetar uma criação tão vasta e bela? E que implicações a resposta à questão central da obra oferece para o leitor?",
          nome_editora: 4,
          available: false,
          qtd_emprestimos: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Livros", null, {});
  },
};
