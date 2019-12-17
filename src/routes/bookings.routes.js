const express = require("express");
const router = express.Router();
const Ctrl = require("../controllers/bookings.controller");

router.get("/", Ctrl.getBookings);
router.post("/new", Ctrl.newBooking);

module.exports = router;
