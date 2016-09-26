'use strict'

module.exports = app => {
  app.get('/produtos', (req, res, next) => {
    let connection = app.infra.connectionFactory()
    let produtosDAO = new app.infra.ProdutosDAO(connection)

    produtosDAO.lista((erro, results) => {
      if (erro) {
        return next(erro)
      }
      res.format({
        html: () => res.render('produtos/lista', {lista: results}),
        json: () => res.json(results)
      })
    })

    connection.end()
  })

  app.get('/produtos/form', (req, res) => {
    res.render('produtos/form', {validationErrors: [], produto: {}})
  })

  app.post('/produtos', (req, res) => {
    let produto = req.body

    req.assert('titulo', 'Titulo deve ser preenchido').notEmpty()
    req.assert('preco', 'Preco deve ser um número').isFloat()

    let errors = req.validationErrors()
    if (errors) {
      res.format({
        html: () => res.status(400).render('produtos/form', {validationErrors: errors, produto: produto}),
        json: () => res.status(400).json(errors)
      })

      return
    } else {
      let connection = app.infra.connectionFactory()
      let produtosDAO = new app.infra.ProdutosDAO(connection)

      produtosDAO.salva(produto, (erro, results) => {
        res.redirect('/produtos')
      })

      connection.end()
    }
  })
}
