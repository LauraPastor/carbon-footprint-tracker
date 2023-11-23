import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnergyData } from "../actions";

const EnergyChart = () => {
  const dispatch = useDispatch();
  const energyData = useSelector((state) => state.energy);

  useEffect(() => {
    dispatch(fetchEnergyData());
  }, [dispatch]);

  return (
    <div className="chart">
      <h2>Energy Chart</h2>
    </div>
  );
};

export default EnergyChart;
