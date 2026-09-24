const { getLocationById } = require("./locationService");
const { getWeatherData } = require("./weatherService");
const { getAQIData } = require("./aqiService");

const getMonitoringData = async (locationId) => {
    const location = getLocationById(locationId);

    if (!location) {
        return null;
    }

    const weatherData = await getWeatherData(
        location.latitude,
        location.longitude
    );

    const aqiData = await getAQIData(
        location.latitude,
        location.longitude
    );

    return {
        location,
        weather: weatherData,
        airQuality: aqiData
    };
};

module.exports = {
    getMonitoringData
};