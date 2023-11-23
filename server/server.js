const PORT = 8000;
const express = require("express");
const cors = require("cors");
const fetchData = require("./fetchData");
const app = express();
app.use(cors());

app.get("/api/transportation", async (req, res) => {
  try {
    const transportationData = await fetchData.fetchTransportationData();
    res.json(transportationData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/energy", async (req, res) => {
  try {
    const energyData = await fetchData.fetchEnergyData();
    res.json(energyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/food", async (req, res) => {
  try {
    const foodData = await fetchData.fetchFoodData();
    res.json(foodData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
