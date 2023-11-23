const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.API_KEY; // Replace with your actual API key

const fetchTransportationData = async () => {
  try {
    const response = await axios.get(
      "https://www.carboninterface.com/api/v1/transportation",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchEnergyData = async () => {
  try {
    const response = await axios.get(
      "https://www.carboninterface.com/api/v1/energy",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchFoodData = async () => {
  try {
    const response = await axios.get(
      "https://www.carboninterface.com/api/v1/food",
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchTransportationData,
  fetchEnergyData,
  fetchFoodData,
};
