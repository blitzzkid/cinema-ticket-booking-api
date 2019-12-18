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

const updateSeat = async (req, res, next) => {
  const seatId = req.params.seatId;
  const newStatus = req.body.status;
  try {
    await SeatModel.updateOne(
      { _id: seatId },
      { status: newStatus },
      { safe: true, multi: true, new: true }
    );
    const updatedSeat = await SeatModel.findOne({ _id: seatId });
    res.send(updatedSeat);
  } catch (error) {
    error.status = 404;
    next(error);
  }
};

module.exports = { getSeats, newSeat, updateSeat };
