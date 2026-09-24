const express = require("express");
const router = express.Router();

const { getAQI } = require("../controllers/aqiController");

router.get("/aqi", getAQI);

module.exports = router;