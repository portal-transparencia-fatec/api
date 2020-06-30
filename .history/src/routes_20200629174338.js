const express = require('express')
const routes = require('express').Router()
const requireDir = require('require-dir')
const fs = require('fs')
const app = express()

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
routes.get('/servidores/:id', ServidorController.listarPorId)
routes.post('/servidores', ServidorController.criar)
routes.delete('/servidores/:id', ServidorController.excluir)
routes.put('/servidores', ServidorController.atualizar)

/**
 * OCR
 */
routes.get('/ocr', OCRController.getInfosPDF)

routes.use(ErrorMiddleware)

module.exports = routes
