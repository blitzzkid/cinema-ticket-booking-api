const express = require("express");
const app = express();

if (app.get("env") !== "test") {
  require("./utils/db");
}

app.use(express.json());

module.exports = app;
