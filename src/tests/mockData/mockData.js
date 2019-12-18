const mongoose = require("mongoose");

module.exports.mockBookings = [
  {
    customerName: "Tom",
    customerEmail: "Tom@gmail.com"
  }
];

module.exports.mockSeats = [
  {
    _id: mongoose.Types.ObjectId("5df9c4815489a584649552a3"),
    seatNumber: "A1",
    status: "available",
    capacity: 1
  },
  {
    _id: mongoose.Types.ObjectId("5df9c4855489a584649552a4"),
    seatNumber: "A2",
    status: "reserved",
    capacity: 1
  },
  {
    _id: mongoose.Types.ObjectId("5df9c4895489a584649552a5"),
    seatNumber: "A3",
    status: "sold",
    capacity: 1
  }
];
