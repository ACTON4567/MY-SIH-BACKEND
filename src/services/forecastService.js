const predictions = {};

const saveForecast = (locationId, forecastData) => {
    predictions[locationId] = forecastData;

    return predictions[locationId];
};

const getForecast = (locationId) => {
    return predictions[locationId];
};

module.exports = {
    saveForecast,
    getForecast
};