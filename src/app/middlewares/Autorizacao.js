const jwt = require('jsonwebtoken')
const config = require('../../config/jwt')

module.exports = (req, res, next) => {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({ error: 'Token JWT não fornecido' })
  }

  const parts = authToken.split(' ')

  if (parts.length !== 2) {
    return res.status(401).json({ error: 'Formato inválido' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/.test(scheme)) {
    return res.status(401).json({ error: 'Formato inválido' })
  }

  try {
    const { usuario } = jwt.verify(token, config.secret)
    req.usuario = usuario

    next()
  } catch (err) {
    console.log(err)
    res.status(401).json({ error: 'Não autorizado' })
  }
}
