import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import posts from'./posts';
import reducerTripData from './reducerTripData';
import reducerFlightData from './reducerFlightData';

// import expediaHotelInfo from './expediaHotelInfo'; 
// import expediaFlightInfo from './expediaFlightInfo';
// import expediaCarRentalInfo from './expediaCarRentalInfo'; 
// import expediaActivityInfo from './expediaActivityInfo'; 


const rootReducer = combineReducers({
  reducerTripData,
  reducerFlightData,
  // expediaHotelInfo,
  // expediaFlightInfo,
  // expediaCarRentalInfo,
  // expediaActivityInfo,
  routing: routerReducer
});

export default rootReducer;