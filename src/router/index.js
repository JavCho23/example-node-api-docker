const message = require("../message");
const { validate } = require("../auth/validate");
const { login } = require("../auth/login");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("sdfsd");
  });

  app.post("/login", login);

  app.get("/orders", validate ,(req, res) => {
    res.json({orders:[]})
  });
};
