const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservationController");

router.get("/", userController.getReservations);

module.exports = router;
