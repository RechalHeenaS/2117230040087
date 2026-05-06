require("dotenv").config();

const express = require("express");
const axios = require("axios");
const Log = require("./logging_middleware/logger");

const app = express(); // ✅ MUST come before routes

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  Log("backend", "info", "route", "GET / endpoint accessed");
  res.send("Backend running");
});

// ✅ Notifications route
app.get("/notifications", async (req, res) => {
  try {
    Log("backend", "info", "route", "GET /notifications called");

    const response = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`
        }
      }
    );

    Log("backend", "info", "service", "Notifications fetched successfully");

    res.json(response.data);
  } catch (error) {
  console.error("FULL ERROR:", error.response?.data || error.message);

  Log(
    "backend",
    "error",
    "service",
    `Failed to fetch notifications: ${error.message}`
  );

  res.status(500).json({ error: "Failed to fetch notifications" });
}
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});