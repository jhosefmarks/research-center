'use strict'

module.exports = app => {
  app.get('/promocoes/form', (req, res) => {
    let connection = app.infra.connectionFactory()
    let produtoDao = new app.infra.ProdutoDao(connection)

    produtoDao.lista((error, results) => {
      res.render('promocoes/form', {lista: results})
    });

  });

  app.post('/promocoes', (req,res) => {
    let promocao = req.body;

    res.redirect('/promocoes/form')
  });

}
