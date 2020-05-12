'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('contas', [
      { email: 'marcos.morais@neorodas.com.br', tempo_acesso_inicio: '08:00', tempo_acesso_fim: '17:00' },
      { email: 'ti@neorodas.com.br', tempo_acesso_inicio: '09:00', tempo_acesso_fim: '16:00' }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('contas', [
      { email: 'marcos.morais@neorodas.com.br' },
      { email: 'ti@neorodas.com.br' }
    ])
  }
}
