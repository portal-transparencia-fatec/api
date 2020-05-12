'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [rowsUsuarios] = await queryInterface.sequelize.query(
      "SELECT id FROM usuarios WHERE username = 'marcos.morais';"
    )

    const [rowsContas] = await queryInterface.sequelize.query(
      "SELECT id, email FROM contas WHERE email IN ('marcos.morais@neorodas.com.br', 'ti@neorodas.com.br')"
    )
    
    const [usuario] = rowsUsuarios
    const [primeiroEmail, segundoEmail] = rowsContas

    await queryInterface.bulkInsert('usuarios_contas', [
      { usuario_id: usuario.id, conta_id: primeiroEmail.id },
      { usuario_id: usuario.id, conta_id: segundoEmail.id }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
