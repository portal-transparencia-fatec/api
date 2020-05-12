'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shortcuts', [
      { url: 'https://www.google.com.br/', nome: 'Google' },
      { url: 'http://facebook.com.br', nome: 'Facebook' },
      { url: 'https://br.pinterest.com/', nome: 'Pinterest' },
      { url: 'https://medium.com/', nome: 'Medium' }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('shortcuts', [
      { url: 'https://www.google.com.br/', nome: 'Google' },
      { url: 'http://facebook.com.br', nome: 'Facebook' },
      { url: 'https://br.pinterest.com/', nome: 'Pinterest' },
      { url: 'https://medium.com/', nome: 'Medium' }
    ])
  }
}
