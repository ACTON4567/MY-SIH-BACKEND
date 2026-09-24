const { getWeatherData } = require("../services/weatherService");

const getWeather = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({
                message: "Latitude and longitude are required"
            });
        }

        const lat = Number(latitude);
        const lon = Number(longitude);

        if (
            Number.isNaN(lat) ||
            Number.isNaN(lon) ||
            lat < -90 ||
            lat > 90 ||
            lon < -180 ||
            lon > 180
        ) {
            return res.status(400).json({
                message: "Invalid latitude or longitude"
            });
        }

        const weatherData = await getWeatherData(lat, lon);

        res.status(200).json(weatherData);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch weather data"
        });
    }
};

module.exports = { getWeather };