'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('permissoes', [
      { nome: 'ADMINISTRADOR_GLOBAL' },
      { nome: 'ADMINISTRADOR' },
      { nome: 'USUARIO' },
      { nome: 'PUBLICISTA' },
      { nome: 'FINANCEIRO' }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('permissoes', {
      nome: ['ADMINISTRADOR_GLOBAL', 'ADMINISTRADOR', 'USUARIO', 'PUBLICISTA', 'FINANCEIRO']
    })
  }
}
