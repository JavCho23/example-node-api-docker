require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.APP_PORT
const message = require("./src/message")

app.get('/', (req, res) => {
  res.send(message)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})