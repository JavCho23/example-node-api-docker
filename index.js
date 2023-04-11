require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.APP_PORT;
const router = require("./src/router");

app.use(express.json());

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
