'use strict'

module.exports = (app) => {
  let api = app.api.grupo

  app.get('/v1/grupos', api.lista)
}
