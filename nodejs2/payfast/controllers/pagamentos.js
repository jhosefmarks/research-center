'use strict'

const PAGAMENTO_CRIADO = 'CRIADO'
const PAGAMENTO_CONFIRMADO = 'CONFIRMADO'
const PAGAMENTO_CANCELADO = 'CANCELADO'

module.exports = app => {
  app.get('/pagamentos', (req, res) => {
    console.log('Recebida requisicao de teste na porta 3000.')
    res.send('OK.')
  })

  app.delete('/pagamentos/pagamento/:id', (req, res) => {
    let pagamento = {}
    let id = req.params.id

    pagamento.id = id
    pagamento.status = PAGAMENTO_CANCELADO

    let connection = app.persistencia.connectionFactory()
    let pagamentoDao = new app.persistencia.PagamentoDao(connection)

    pagamentoDao.atualiza(pagamento, erro => {
      if (erro) {
        res.status(500).send(erro)
        return
      }
      console.log('pagamento cancelado: ', pagamento)
      res.status(204).json(pagamento)
    })
  })

  app.put('/pagamentos/pagamento/:id', (req, res) => {
    let pagamento = {}
    let id = req.params.id

    pagamento.id = id
    pagamento.status = PAGAMENTO_CONFIRMADO

    let connection = app.persistencia.connectionFactory()
    let pagamentoDao = new app.persistencia.PagamentoDao(connection)

    pagamentoDao.atualiza(pagamento, erro => {
      if (erro) {
        res.status(500).send(erro)
        return
      }

      console.log('pagamento confirmado: ', pagamento)

      pagamento.link = [{
        rel: 'consultar',
        uri: '/pagamentos/pagamento/' + pagamento.id,
        method: 'GET'
      }]

      res.status(204).json(pagamento)
    })
  })

  app.post('/pagamentos/pagamento', (req, res) => {
    let body = req.body
    let pagamento = body.pagamento

    req.assert('pagamento.forma_de_pagamento', 'Forma de pagamento é obrigatória.').notEmpty()
    req.assert('pagamento.valor', 'Valor é obrigatório e deve ser um decimal.').notEmpty().isFloat()
    req.assert('pagamento.moeda', 'Moeda é obrigatória e deve ter 3 caracteres').notEmpty().len(3, 3)

    let errors = req.validationErrors()

    if (errors) {
      console.log('Erros de validação encontrados')
      res.status(400).send(errors)
      return
    }

    let connection = app.persistencia.connectionFactory()
    let pagamentoDao = new app.persistencia.PagamentoDao(connection)

    pagamento.status = PAGAMENTO_CRIADO
    pagamento.data = new Date()

    pagamentoDao.salva(pagamento, (erro, resultado) => {
      if (erro) {
        console.log('Erro ao inserir no banco: ', erro)
        res.status(500).send(erro)
        return
      }

      if (pagamento.forma_de_pagamento === 'cartao') {
        let cartao = req.body.cartao
        let clienteCartoes = new app.servicos.CartoesClient()

        clienteCartoes.autoriza(cartao, (exception, request, response, retorno) => {
          if (exception) {
            console.log(exception)
            res.status(400).send(exception)
            return
          }

          res.location('/pagamentos/pagamento/' + pagamento.id)

          // retorno.cartao = retorno
          response = {
            cartao: retorno,
            dados_do_pagamanto: pagamento,
            links: [{
              rel: 'confirmar',
              uri: '/pagamentos/pagamento/' + pagamento.id,
              method: 'PUT'
            }, {
              rel: 'cancelar',
              uri: '/pagamentos/pagamento/' + pagamento.id,
              method: 'DELETE'
            }]
          }

          res.status(201).json(response)
        })
      } else {
        pagamento.id = resultado.insertId

        let response = {
          dados_pagamento: pagamento,
          links: [{
            rel: 'confirmar',
            uri: '/pagamentos/pagamento/' + pagamento.id,
            method: 'PUT'
          }, {
            rel: 'cancelar',
            uri: '/pagamentos/pagamento/' + pagamento.id,
            method: 'DELETE'
          }]
        }

        res.location('/pagamentos/pagamento/' + resultado.insertId)

        res.status(201).json(response)
      }
    })
  })
}
