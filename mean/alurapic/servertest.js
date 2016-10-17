let http = require('http')

http
  .createServer((req, res) => {
    let valor = req.url.substr(req.url.indexOf('=') + 1)
    res.end(valor) 
  })
  .listen(3000, function() {
    console.log('NEH') 
  })