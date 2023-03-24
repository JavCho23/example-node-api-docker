const express = require('express')
const app = express()
const message = require("./src")

app.get('/', function (req, res) {
  res.send(message)
})

app.listen(3000)