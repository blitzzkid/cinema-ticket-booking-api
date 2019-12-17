const BookingModel = require("../models/Booking.model");

const getBookings = async (req, res, next) => {
  try {
    const allBookings = await BookingModel.find();
    res.status(200).json(allBookings);
  } catch (err) {
    next(err);
  }
};

module.exports = { getBookings };
