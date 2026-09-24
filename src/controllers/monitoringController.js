const { getMonitoringData } = require("../services/monitoringService");

const getMonitoring = async (req, res) => {
    try {
        const { locationId } = req.params;

        const monitoringData = await getMonitoringData(locationId);

        if (!monitoringData) {
            return res.status(404).json({
                message: "Location not found"
            });
        }

        res.status(200).json(monitoringData);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch monitoring data"
        });
    }
};

module.exports = {
    getMonitoring
};