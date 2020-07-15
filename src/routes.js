const express = require('express')
const routes = require('express').Router()
const requireDir = require('require-dir')
const fs = require('fs')
const app = express()
const path = require('path')

routes.use(express.urlencoded({ extended: true }))

const {
  AutenticacaoController,
  UsuarioController,
  ServidorController,
  OCRController,
} = requireDir('./app/controllers')

const {
  Error: ErrorMiddleware,
  Autorizacao: AutorizacaoMiddleware
} = requireDir('./app/middlewares')


routes.post('/login', AutenticacaoController.autenticar)

/**
 * Usuario
 */

routes.get('/usuarios', UsuarioController.listar)
routes.get('/usuarios/:id', UsuarioController.listarPorId)
routes.post('/usuarios', UsuarioController.criar)
routes.delete('/usuarios', UsuarioController.excluir)
routes.put('/usuarios', UsuarioController.atualizar)
/**
 * Servidor
 */

routes.get('/servidores', ServidorController.listar)
routes.get('/servidores/cargos/', ServidorController.getAllCargos)
routes.get('/servidores/regimes/', ServidorController.getAllRegimes)
routes.get('/servidores/grafico/salarios/:rgf', ServidorController.getAllSalariosByRgf)

routes.get('/servidores/:id', ServidorController.listarPorId)


routes.post('/servidores', ServidorController.criar)
routes.delete('/servidores/:id', ServidorController.excluir)
routes.put('/servidores', ServidorController.atualizar)

/**
 * OCR
 */
routes.get('/ocr', OCRController.getInfosPDF)

routes.get('/img/random', (req, res) => {
  const random = Math.floor(Math.random() * 5) + 1  
  res.sendFile(path.resolve(__dirname, '..', 'tmp', 'random', `${random}.jpg`));
});

routes.use(ErrorMiddleware)

module.exports = routes
