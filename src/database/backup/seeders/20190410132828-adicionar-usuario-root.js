'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'Marcos Morais',
        username: 'marcos.morais',
        ativo: true
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', [
      { username: 'marcos.morais' }
    ])
  }
}
