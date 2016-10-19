'use strict'

module.exports = (app) => {
  let api = app.api.foto

  app.route('/v1/fotos')
    .get(api.lista)
    .post(api.adiciona)
    .put(api.atualiza)

  // apenas uma URL, dois verbos distintos
  app.route('/v1/fotos/:id')
    .get(api.buscaPorId)
    .delete(api.removePorId)
}
