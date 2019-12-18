const SeatModel = require("../models/Seat.model");

const getSeats = async (req, res, next) => {
  try {
    const allSeats = await SeatModel.find();
    res.status(200).json(allSeats);
  } catch (err) {
    next(err);
  }
};

const newSeat = async (req, res, next) => {
  try {
    const booking = new SeatModel(req.body);
    await SeatModel.init();
    const newSeat = await booking.save();
    res.status(201).send(newSeat);
  } catch (err) {
    if (err.name === "ValidationError") {
      err.status = 400;
    }
    next(err);
  }
};

module.exports = { getSeats, newSeat };
