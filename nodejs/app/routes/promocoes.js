'use strict'

module.exports = app => {
  app.get('/promocoes/form', (req, res) => {
    let connection = app.infra.connectionFactory()
    let produtosDAO = new app.infra.ProdutosDAO(connection)

    produtosDAO.lista((erro, results) => {
      res.render('promocoes/form', {lista: results})
    })

    connection.end()
  })

  app.post('/promocoes', (req, res) => {
    let promocao = req.body

    app.get('io').emit('novaPromocao', promocao)

    res.redirect('/promocoes/form')
  })
}
