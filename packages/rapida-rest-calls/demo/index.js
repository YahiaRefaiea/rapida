const express = require('express')
const response = require('@rapida/response')
const Api = require('../src/api')
const app = express()

const api = new Api('http://localhost:3000')
api.createEntity('book')

app.get('/book', function(req, res, next) {
  res.send(new response.Found({title: 'Book Title', author: 'Book Author'}, 'Book found'))
})

/* eslint-disable no-console */
app.get('/test', function(req, res, next) {
  api.endpoints.book.getAll()
    .then(data => res.send(console.log(data)))
    .catch(error => res.send(console.log(error)))
})

app.listen(3000)
