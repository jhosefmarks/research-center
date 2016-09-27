module.exports = app => {
  app.post('/correios/calculo-prazo', (req, res) => {
    let dadosDaEntrega = req.body

    let correiosSOAPClient = new app.servicos.CorreiosSOAPClient()

    correiosSOAPClient.calculaPrazo(dadosDaEntrega, (erro, resultado) => {
      if (erro) {
        res.status(500).send(erro)
        return
      }

      console.log('prazo calculado')
      res.json(resultado)
    })
  })
}
