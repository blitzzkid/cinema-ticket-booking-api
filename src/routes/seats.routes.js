const express = require("express");
const router = express.Router();
const Ctrl = require("../controllers/seats.controller");

router.get("/", Ctrl.getSeats);

module.exports = router;
