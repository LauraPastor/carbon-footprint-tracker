import { combineReducers } from "redux";
import {
  FETCH_TRANSPORTATION_SUCCESS,
  FETCH_ENERGY_SUCCESS,
  FETCH_FOOD_SUCCESS,
  FETCH_FAILURE,
} from "../actions";

// Define your initial state
const initialState = {
  transportation: [],
  energy: [],
  food: [],
  error: null,
};

// Define your reducers
const transportationReducer = (state = initialState.transportation, action) => {
  switch (action.type) {
    case FETCH_TRANSPORTATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const energyReducer = (state = initialState.energy, action) => {
  switch (action.type) {
    case FETCH_ENERGY_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const foodReducer = (state = initialState.food, action) => {
  switch (action.type) {
    case FETCH_FOOD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

// Combine your reducers
const rootReducer = combineReducers({
  transportation: transportationReducer,
  energy: energyReducer,
  food: foodReducer,
  error: errorReducer,
});

export default rootReducer;
