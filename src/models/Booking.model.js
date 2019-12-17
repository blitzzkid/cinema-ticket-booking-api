const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerName: { type: String },
  customerEmail: { type: String }
});

const BookingModel = mongoose.model("booking", bookingSchema);

module.exports = BookingModel;
