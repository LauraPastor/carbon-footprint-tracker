import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransportationData } from "../actions";

const TransportationChart = () => {
  const dispatch = useDispatch();
  const transportationData = useSelector((state) => state.transportation);

  useEffect(() => {
    dispatch(fetchTransportationData());
  }, [dispatch]);

  return (
    <div className="chart">
      <h2>Transportation Chart</h2>
    </div>
  );
};

export default TransportationChart;
