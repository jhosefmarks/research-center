'use strict'

let fs = require('fs')

fs.createReadStream('imagem.jpg')
  .pipe(fs.createWriteStream('imagem-stream.jpg'))
  .on('finish', () => {
    console.log('arquivo lido.')
  })
