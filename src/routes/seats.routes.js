const express = require("express");
const router = express.Router();
const Ctrl = require("../controllers/seats.controller");

router.get("/", Ctrl.getSeats);
router.post("/new", Ctrl.newSeat);
router.patch("/:seatId", Ctrl.updateSeat);

module.exports = router;
