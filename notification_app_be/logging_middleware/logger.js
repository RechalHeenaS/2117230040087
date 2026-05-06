require("dotenv").config();
const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";
const TOKEN = process.env.TOKEN;

const Log = async (stack, level, pkg, message) => {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log(
      `[${level.toUpperCase()}] ${message} | LogID: ${response.data.logID}`
    );
  } catch (error) {
    console.error(
      "Logging Failed:",
      error.response?.data || error.message
    );
  }
};

module.exports = Log;