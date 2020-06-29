const jwt = require('jsonwebtoken')
const usuarioCore = require('../core/UsuarioCore')
const jwtConfig = require('../../config/jwt')

class AutenticacaoController {
  async autenticar ({ body: {email, senha } }, res) {
    try {
      const usuario = await usuarioCore.autenticar(email, senha)
      if (!usuario) throw usuario;
      const accessToken = await jwt.sign({ usuario }, jwtConfig.secret, { expiresIn: '24h' })

      res.json({ accessToken })
    } catch (err) {
      res.status(401).json({ error: 'Login ou senha inválidos' })
    }
  }
}

module.exports = new AutenticacaoController()
