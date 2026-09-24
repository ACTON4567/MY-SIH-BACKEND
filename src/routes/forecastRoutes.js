const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    createForecast,
    fetchForecast
} = require("../controllers/forecastController");

router.post("/forecast", protect, createForecast);
router.get("/forecast/:locationId", fetchForecast);

module.exports = router;