'use strict'

let fs = require('fs')

fs.readFile('imagem.jpg', (erro, buffer) => {
  console.log('lendo um arquivo')

  fs.writeFile('imagem2.jpg', buffer, (erro) => {
    console.log('escrevendo um arquivo')
  })
})
