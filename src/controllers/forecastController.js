const { getLocationById } = require("../services/locationService");
const {
    saveForecast,
    getForecast
} = require("../services/forecastService");

const createForecast = (req, res) => {
    try {
        const { locationId, forecastData } = req.body;

        if (!locationId || !forecastData) {
            return res.status(400).json({
                message: "locationId and forecastData are required"
            });
        }

        const location = getLocationById(locationId);

        if (!location) {
            return res.status(404).json({
                message: "Invalid NCR location"
            });
        }

        const savedForecast = saveForecast(locationId, forecastData);

        res.status(201).json({
            message: "Forecast saved successfully",
            locationId,
            forecast: savedForecast
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to save forecast"
        });
    }
};

const fetchForecast = (req, res) => {
    try {
        const { locationId } = req.params;

        const forecast = getForecast(locationId);

        if (!forecast) {
            return res.status(404).json({
                message: "Forecast not found"
            });
        }

        res.status(200).json({
            locationId,
            forecast
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch forecast"
        });
    }
};

module.exports = {
    createForecast,
    fetchForecast
};