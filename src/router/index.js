const message = require("../message")
const validateFunction = require("../auth/validate")

module.exports = function (app) {
  app.get('/', (req, res) => {
    res.send("sdfsd")
  })

  app.post('/login', (req, res) => {
    res.send("Loshiiiin")
  })

  app.post('/validate', validateFunction)
}