let http = require('http')
let app = require('./config/express')

let server = http
  .createServer(app)
  .listen(3000, () => console.log('Servidor iniciado'))

