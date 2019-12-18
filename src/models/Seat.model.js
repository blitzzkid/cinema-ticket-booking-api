const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  seatNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ["reserved", "available", "sold"],
    required: true
  },
  capacity: { type: Number, required: true }
});

const SeatModel = mongoose.model("seat", seatSchema);

module.exports = SeatModel;
