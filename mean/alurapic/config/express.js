'use strict'

let express = require('express')
let app = express()

app.use(express.static('./public'))

app.get('/v1/fotos', (req, res) => {
  let fotos = [{
    id: 1, titulo: 'Leão', url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
  }, {
    id: 2, titulo: 'Leão 2', url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
  }]

  res.json(fotos)
})

module.exports = app
