'use strict'

module.exports = (app) => {
  let api = app.api.foto

  app.get('/v1/fotos', api.lista)
  app.get('/v1/fotos/:id', api.buscaPorId)
}
