'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    var models = require('../../app/models')
    return models.Categoria.bulkCreate([
      { id: 1, nome: 'Cultura e entretenimento' },
      { id: 2, nome: 'Economia e negócios' },
      { id: 3, nome: 'Ciência e tecnologia' },
      { id: 4, nome: 'Eventos' },
      { id: 5, nome: 'Educação' }
    ])

    // this does not work
    // gives error "Seed file failed with error: Validation error" on the console.
    // further inspection using console.log() shows
    // that is a 'SequelizeUniqueConstraintError'
    // return queryInterface.bulkInsert('categorias', [
    //   { nome: 'Cultura e entretenimento' },
    //   { nome: 'Economia e negócios' },
    //   { nome: 'Ciência e tecnologia' },
    //   { nome: 'Eventos' },
    //   { nome: 'Educação' }
    // ], {})
    /*
        * however, this DOES work
        *

        */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categorias', [
      { nome: 'Cultura e entretenimento' },
      { nome: 'Economia e negócios' },
      { nome: 'Ciência e tecnologia' },
      { nome: 'Eventos' },
      { nome: 'Educação' }
    ])
  }
}

// 'use strict'

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.bulkInsert('categorias', [

//     ])
//   },

// }
