const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/api/location", (req, res) => {
  res.json({ message: "Location API is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// BACKEND: backend/config/googleMaps.js
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
module.exports = { GOOGLE_MAPS_API_KEY };