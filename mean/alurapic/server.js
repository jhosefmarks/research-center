'use strict'

let http = require('http')
let app = require('./config/express')

//novidade aqui
require('./config/database')('localhost/alurapic')

http
  .createServer(app)
  .listen(3000, () => console.log('Servidor iniciado'))
