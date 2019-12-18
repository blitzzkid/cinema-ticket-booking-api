const SeatModel = require("../models/Seat.model");

const getSeats = async (req, res, next) => {
  try {
    const allSeats = await SeatModel.find();
    res.status(200).json(allSeats);
  } catch (err) {
    next(err);
  }
};

module.exports = { getSeats };
