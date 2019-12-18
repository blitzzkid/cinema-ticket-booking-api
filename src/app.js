const express = require("express");
const app = express();
const bookingRouter = require("./routes/bookings.routes");
const seatRouter = require("./routes/seats.routes");
const cors = require("cors");

const corsOptions = {
  origin: [
    "https://cinema-ticket-booking.netlify.com",
    "https://cinema-ticket-booking.herokuapp.com/",
    "http://localhost:3000",
    "http://localhost:3005"
  ],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true
};

if (app.get("env") !== "test") {
  require("./utils/db");
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/bookings", bookingRouter);
app.use("/seats", seatRouter);

module.exports = app;
