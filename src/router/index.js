const message = require("../message");
const validateFunction = require("../auth/validate");
const { login } = require("../auth/login");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("sdfsd");
  });

  app.post("/login", login);

  app.post("/validate", validateFunction);
};
