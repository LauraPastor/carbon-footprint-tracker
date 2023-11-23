import axios from "axios";

// Define your action types
export const FETCH_TRANSPORTATION_SUCCESS = "FETCH_TRANSPORTATION_SUCCESS";
export const FETCH_ENERGY_SUCCESS = "FETCH_ENERGY_SUCCESS";
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// Define your action creators
export const fetchTransportationSuccess = (data) => ({
  type: FETCH_TRANSPORTATION_SUCCESS,
  payload: data,
});

export const fetchEnergySuccess = (data) => ({
  type: FETCH_ENERGY_SUCCESS,
  payload: data,
});

export const fetchFoodSuccess = (data) => ({
  type: FETCH_FOOD_SUCCESS,
  payload: data,
});

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

// Define your async action creators (thunks)
export const fetchTransportationData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/transportation");
    dispatch(fetchTransportationSuccess(response.data));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};

export const fetchEnergyData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/energy");
    dispatch(fetchEnergySuccess(response.data));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};

export const fetchFoodData = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/food");
    dispatch(fetchFoodSuccess(response.data));
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};
