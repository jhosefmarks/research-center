'use strict'

let app = require('./config/custom-express')()

app.listen(3001, () => {
  console.log('Servidor CARDFAST rodando na porta 3001.')
})
