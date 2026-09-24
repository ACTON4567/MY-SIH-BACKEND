const {
    getLocations,
    getLocationById
} = require("../services/locationService");

const getAllLocations = (req, res) => {
    try {
        const locations = getLocations();

        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch locations"
        });
    }
};

const getSingleLocation = (req, res) => {
    try {
        const { id } = req.params;

        const location = getLocationById(id);

        if (!location) {
            return res.status(404).json({
                message: "Location not found"
            });
        }

        res.status(200).json(location);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch location"
        });
    }
};

module.exports = {
    getAllLocations,
    getSingleLocation
};