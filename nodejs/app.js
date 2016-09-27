'use strict'

let app = require('./config/express')
let http = require('http').Server(app)
let io = require('socket.io')(http)
let porta = process.env.PORT || 3000

app.set('io', io)

let server = http.listen(porta, () => {
  let host = server.address().address
  let port = server.address().port

  console.log(`Servidor no ar: ${host}:${port}`)
})
