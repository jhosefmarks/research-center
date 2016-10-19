'use strict'

let mongoose = require('mongoose')
let jwt  = require('jsonwebtoken')

module.exports = function(app) {
  let api = {}
  let model = mongoose.model('Usuario')

  api.autentica = (req, res) => {
    model.findOne({
        login: req.body.login,
        senha: req.body.senha
    })
    .then(function(usuario) {
      if (!usuario) {
        console.log('Login/senha inválidos')
        res.sendStatus(401)
      } else {
        let token = jwt.sign({login: usuario.login}, app.get('secret'), {expiresIn: 86400})

        console.log('Autenticado: token adicionado na resposta')
        res.set('x-access-token', token) // adicionando token no cabeçalho de resposta
        res.end() // enviando a resposta
      }
    })
  }

  api.verificaToken = (req, res, next) => {
    let token = req.headers['x-access-token']; // busca o token no header da requisição

    if (token) {
      console.log('Token recebido, decodificando');
      jwt.verify(token, app.get('secret'), (err, decoded) => {
        if (err) {
          console.log('Token rejeitado')
          return res.sendStatus(401)
        } else {
          console.log('Token aceito')
          // guardou o valor decodificado do token na requisição. No caso, o login do usuário.
          req.usuario = decoded
          next()
        }
      })
    } else {
      console.log('Nenhum token enviado')

      return res.sendStatus(401)
    }
  }

  return api;
}
