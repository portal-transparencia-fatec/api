const servidorCore = require('../core/ServidorCore')

class ServidorController {
  async criar (req, res, next) {
    try {
      const servidor = await servidorCore.criar(req.body)
      res.json(servidor)
    } catch (err) {
      next(err)
    }
  }

  async listar ({ query: { page } }, res, next) {
    try {
      const servidores = await servidorCore.listar(page)
      res.json(servidores)
    } catch (err) {
      next(err)
    }
  }

  async listarPorId (req, res, next) {
    const { id } = req.params
    try {
      const servidor = await servidorCore.listarPorId(id)
      res.json(servidor)
    } catch (err) {
      next(err)
    }
  }

  async atualizar (req, res, next) {
    try {
      await servidorCore.atualizar(req.body)

      res.json(req.body)
    } catch (err) {
      next(err)
    }
  }

  async excluir (req, res, next) {
    const { id } = req.params
    try{
      const servidor = await servidorCore.remover(id)
      res.json(servidor)
    }catch(err) {
      next(err)
    }
  }
}

module.exports = new ServidorController()
