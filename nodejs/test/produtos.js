let app = require('../config/express')
let request = require('supertest')(app)
let DatabaseCleaner = require('database-cleaner')

describe('ProdutosController', () => {
  beforeEach(done => {
    let databaseCleaner = new DatabaseCleaner('mysql')
    let conn = app.infra.connectionFactory()

    databaseCleaner.clean(conn, () => done())
  })

  it('listagem json', (done) => {
    request.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200, done)
  })

  it('cadastro de novo livro com dados inválidos', (done) => {
    request.post('/produtos')
      .send({titulo: '', descricao: 'novo livro'})
      .expect(400, done)
  })

  it('cadastro de novo livro com dados válidos', (done) => {
    request.post('/produtos')
      .send({titulo: 'novo livro', preco: 29.99, descricao: 'novo livro'})
      .expect(302, done)
  })
})
