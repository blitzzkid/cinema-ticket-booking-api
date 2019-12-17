const BookingModel = require("../models/Booking.model");

const getBookings = async (req, res, next) => {
  try {
    const allBookings = await BookingModel.find();
    res.status(200).json(allBookings);
  } catch (err) {
    next(err);
  }
};

const newBooking = async (req, res, next) => {
  try {
    const booking = new BookingModel(req.body);
    await BookingModel.init();
    const newBooking = await booking.save();
    res.status(201).send(newBooking);
  } catch (err) {
    next(err);
  }
};

module.exports = { getBookings, newBooking };
