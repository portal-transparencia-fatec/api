const { Servidor, sequelize } = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ServidorCore {
  criar (servidor) {
    return Servidor.create(servidor)
  }

  remover (id) {
    return Servidor.destroy({ where: { id } })
  }

  atualizar ({id, ...servidor}) {
    return Servidor.update(servidor, { where: { id } })
  }

  listar (page = 0) {
    const pageSize = 10;
    const offset = page * pageSize;
    const limit = pageSize;
  
    return Servidor.findAll({
      limit,
      offset,
    });
  }

  listarPorId (id) {
    return Servidor.findByPk(id)
  }
}

module.exports = new ServidorCore()
