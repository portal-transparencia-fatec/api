'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('setores', [
      { setor: 'suporte', descricao: 'suporte interno' },
    ])
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('setores', [
      { setor: 'suporte'}
    ])
  }
};
