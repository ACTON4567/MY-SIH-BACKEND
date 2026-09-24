const express = require("express");
const router = express.Router();

const {
    getAllLocations,
    getSingleLocation
} = require("../controllers/locationController");

router.get("/locations", getAllLocations);
router.get("/locations/:id", getSingleLocation);

module.exports = router;