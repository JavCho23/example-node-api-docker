require("dotenv").config()

const express = require("express")
const app = express()
const port = process.env.APP_PORT
const message = require("./src/message")

app.use(express.json())

app.get('/', (req, res) => {
  res.send(message)
})

app.post('/login', (req, res) => {
  res.send("Loshiiiin")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})