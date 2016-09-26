let http = require('http')

let server = http.createServer((req, res) => {
    res.end('<h1>Listando os produtos</h1>')
});

server.listen(3000)

console.log('servidor no ar')