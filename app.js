const morgan = require("morgan");
const helmet = require("helmet");
const errorHandler = require("./src/middleware/errorMiddleware");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/userRoutes");
const authRoutes=require("./src/routes/authRoutes");
const protectedRoutes=require("./src/routes/protectedRoutes");
const weatherRoutes=require("./src/routes/weatherRoutes");
const aqiRoutes = require("./src/routes/aqiRoutes");
const locationRoutes = require("./src/routes/locationRoutes");
const forecastRoutes = require("./src/routes/forecastRoutes");
const monitoringRoutes = require("./src/routes/monitoringRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api", userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api",protectedRoutes);
app.use("/api",weatherRoutes);
app.use("/api", aqiRoutes);
app.use("/api", locationRoutes);
app.use("/api", forecastRoutes);
app.use("/api", monitoringRoutes);
app.get("/", (req, res) => {
  res.json({ message: "SIH Backend is running" });
});
app.use(errorHandler);
module.exports = app;
