const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true }
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = BookingModel;
