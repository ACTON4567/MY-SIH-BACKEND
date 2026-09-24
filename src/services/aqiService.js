const axios = require("axios");

const getAQIData = async (latitude, longitude) => {
    try {
        const response = await axios.get(
            "https://air-quality-api.open-meteo.com/v1/air-quality",
            {
                params: {
                    latitude,
                    longitude,
                    hourly: "pm2_5,pm10,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone",
                    current: "pm2_5,pm10,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone",
                    timezone: "Asia/Kolkata",
                    forecast_days: 3
                }
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

module.exports = { getAQIData };