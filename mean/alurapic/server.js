'use strict'

let http = require('http')
let app = require('./config/express')

http
  .createServer(app)
  .listen(3000, () => console.log('Servidor iniciado'))
