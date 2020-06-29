const { Usuario } = require('../models')
const usuarioCore = require('../core/UsuarioCore')

class UsuarioController {
  async criar (req, res, next) {
    try {
      const { dataValues: { senha, admin, ...usuario } } = await usuarioCore.criar(req.body)
      res.json({...usuario, admin: admin || false })
    } catch (err) {
      next(err)
    }
  }

  async atualizar (req, res, next) {
    try {
      await usuarioCore.atualizar(req.body)

      res.json(req.body)
    } catch (err) {
      next(err)
    }
  }
  
  async listar (req, res, next) {
    try {
      const usuarios = await usuarioCore.listar()

      res.json(usuarios)
    } catch (err) {
      next(err)
    }
  }

  async listarPorId (req, res, next) {
    const { id } = req.params
    try {
      const usuario = await usuarioCore.listarPorId(id)
      res.json(usuario)
    } catch (err) {
      next(err)
    }
  }

  async excluir (req, res, next) {
    const { id } = req.params
    try{
      const usuarios = await usuarioCore.remover(id)

      res.json(usuarios)
    }catch(err) {
      next(err)
    }
  }
}

module.exports = new UsuarioController()
