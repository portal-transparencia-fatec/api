const express = require('express')
const cors = require('cors')
const expressip = require('express-ip')

const morgan = require('morgan')

const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(morgan('dev'))
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp'))
    )
    this.express.use(expressip().getIpInfoMiddleware)
  }

  routes () {
    this.express.use('/api', require('./routes'))
  }
}

module.exports = new App().express
