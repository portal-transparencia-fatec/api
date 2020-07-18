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

  async listar ({ query: { page, rowsPerPage, filters, dataInicial, dataFinal } }, res, next) {
    try {
      const servidores = await servidorCore.listar(page, rowsPerPage, dataInicial, dataFinal, filters || {})
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

  async getAllCargos (req, res, next) {
    try{
      const cargos = await servidorCore.getAllCargos()
      res.json(cargos)
    }catch(err) {
      next(err)
    }
  }

  async getAllRegimes (req, res, next) {
    try{
      const regimes = await servidorCore.getAllRegimes()
      res.json(regimes)
    }catch(err) {
      next(err)
    }
  }

  async getAllSalariosByRgf (req, res, next) {
    const { rgf } = req.params
    try{
      const chart = await servidorCore.getAllSalariosByRgf(rgf)
      res.json(chart)
    }catch(err) {
      next(err)
    }
  }

  async getAllByNome (req, res, next) {
    const { nome } = req.params
    try{
      const servidores = await servidorCore.getAllByNome(nome)
      res.json(servidores)
    }catch(err) {
      next(err)
    }
  }


  async getAllSalariosByRgfs (req, res, next) {
    try{
      const chart = await servidorCore.getAllSalariosByRgfs(req.body)
      res.json(chart)
    }catch(err) {
      next(err)
    }
  }


  async middlewareRequest ({ query: { filters, dataInicial, dataFinal }, ...req }, res, next) {
    try {
      const ip = await servidorCore.getPublicIP();
      await servidorCore.relatorioPesquisa(ip, dataInicial, dataFinal, filters || {})
    }catch(err) {
      console.log(err)
    }
    next()

  }
  

  
  

}

module.exports = new ServidorController()
