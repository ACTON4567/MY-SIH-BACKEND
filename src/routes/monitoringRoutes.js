const express = require("express");
const router = express.Router();

const { getMonitoring } = require("../controllers/monitoringController");

router.get("/monitoring/:locationId", getMonitoring);

module.exports = router;