'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('noticias_permissoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      noticia_id: {
        type: Sequelize.INTEGER,
        references: { model: 'noticias', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      permissoes_id: {
        type: Sequelize.INTEGER,
        references: { model: 'permissoes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('noticias_permissoes')
  }
}
