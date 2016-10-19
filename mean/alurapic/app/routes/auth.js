'use strict'

module.exports = function(app) {
  let api = app.api.auth

  app.post('/autenticar', api.autentica);
  app.use('/*', api.verificaToken);
}
