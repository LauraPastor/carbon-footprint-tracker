import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransportationData,
  fetchEnergyData,
  fetchFoodData,
} from "./actions";
import TransportationChart from "./src/components/TransportationChart";
import EnergyChart from "./src/components/EnergyChart";
import FoodChart from "./src/components/FoodChart";
import TipsSection from "./src/components/TipsSection";

const App = () => {
  const dispatch = useDispatch();
  const transportationData = useSelector((state) => state.transportation);
  const energyData = useSelector((state) => state.energy);
  const foodData = useSelector((state) => state.food);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchTransportationData());
    dispatch(fetchEnergyData());
    dispatch(fetchFoodData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Personal Carbon Footprint Tracker</h1>
      <div className="chart-container">
        <TransportationChart />
        <EnergyChart />
        <FoodChart />
      </div>
      <div className="tips-container">
        <TipsSection />
      </div>
    </div>
  );
};

export default App;
