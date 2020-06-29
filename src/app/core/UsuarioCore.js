const { Usuario, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class UsuarioCore {
  
  criar (usuario) {
    return Usuario.create(usuario)
  }

  atualizar ({id, ...usuario}) {
    return Usuario.update(usuario, { where: { id } })
  }

  listar () {
    return Usuario.findAll()
  }

  listarPorId (id) {
    return Usuario.findByPk(id)
  }

  autenticar(email, senha) {
    return Usuario.findOne({ 
      where: { email, senha },
      attributes: {
        exclude: ['senha']
      }
    })
  }

  remover (id) {
    return Usuario.destroy({ where: { id } })
  }
}

module.exports = new UsuarioCore()
