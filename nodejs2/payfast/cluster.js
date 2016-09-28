'use strict'

let cluster = require('cluster')
let os = require('os')

const CPUS = os.cpus()

if (cluster.isMaster) {
  CPUS.forEach(function () {
    cluster.fork()
  })

  cluster.on('listening', worker => {
    console.log('cluster %d conectado', worker.process.pid)
  })

  cluster.on('disconnect', worker => {
    console.log('cluster %d desconectado', worker.process.pid)
  })

  cluster.on('exit', worker => {
    console.log('cluster %d perdido', worker.process.pid)
    cluster.fork()
  })
} else {
  console.log('thread slave')
  require('./index.js')
}

