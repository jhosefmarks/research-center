let soap = require('soap')

class CorreiosSOAPClient {
  constructor () {
    this._url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl'
  }

  calculaPrazo (args, callback) {
    soap.createClient(this._url, (erro, cliente) => {
      cliente.CalcPrazo(args, callback)
    })
  }
}

module.exports = () => CorreiosSOAPClient
