const express = require('express')
const routes = require('express').Router()
const path = require('path')
const requireDir = require('require-dir')

routes.use(express.urlencoded({ extended: true }))

routes.use(function (req, res, next) {
  req.setTimeout(0) // no timeout for all requests, your server will be DoS'd
  next()
})

const {
  ApiController,
  OCRController,
} = requireDir('./app/controllers')

const {
  Error: ErrorMiddleware,
  Autorizacao: AutorizacaoMiddleware
} = requireDir('./app/middlewares')

routes.get('/servidores', ApiController.getServidores)
routes.get('/servidores/:rgf', ApiController.getServidor)

routes.get('/ocr', OCRController.getInfosPDF)
routes.use(ErrorMiddleware)

module.exports = routes
