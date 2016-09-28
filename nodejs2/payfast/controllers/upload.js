'use strict'

let fs = require('fs')

if (!fs.existsSync('files')) {
  fs.mkdirSync('files')
}

module.exports = app => {
  app.post('/upload/imagem', (req, res) => {
    app.service.logger.info('recebendo imagem')

    let filename = req.headers.filename

    req.pipe(fs.createWriteStream('files/' + filename))
      .on('finish', () => {
        app.service.logger.info('arquivo escrito')
        res.status(201).send('ok')
      })
  })
}
