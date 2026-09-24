const locations = [
    {
        id: "delhi",
        name: "Delhi",
        latitude: 28.6139,
        longitude: 77.2090
    },
    {
        id: "noida",
        name: "Noida",
        latitude: 28.5355,
        longitude: 77.3910
    },
    {
        id: "ghaziabad",
        name: "Ghaziabad",
        latitude: 28.6692,
        longitude: 77.4538
    },
    {
        id: "gurugram",
        name: "Gurugram",
        latitude: 28.4595,
        longitude: 77.0266
    },
    {
        id: "faridabad",
        name: "Faridabad",
        latitude: 28.4089,
        longitude: 77.3178
    }
];

const getLocations = () => {
    return locations;
};

const getLocationById = (id) => {
    return locations.find((location) => location.id === id);
};

module.exports = {
    getLocations,
    getLocationById
};