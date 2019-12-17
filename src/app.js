const express = require("express");
const app = express();
const bookingRouter = require("./routes/bookings.routes");

if (app.get("env") !== "test") {
  require("./utils/db");
}

app.use(express.json());

app.use("/bookings", bookingRouter);

module.exports = app;
