const axios = require("axios");

const getWeatherData = async (latitude, longitude) => {
  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude,
        longitude,
        current: "temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl",
        hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl",
        timezone: "Asia/Kolkata",
        forecast_days: 3,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { getWeatherData };
