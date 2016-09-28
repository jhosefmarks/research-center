'use strict'

let Memcached = require('memcached')

function createMencachedClient () {
  return new Memcached('localhost:11211', {
    retries: 10,
    retry: 10000,
    remove: true
  })
}

module.exports = () => createMencachedClient
