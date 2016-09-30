const reducerTripData = (state = [], action) => {
  //the first time this runs, state doesnt equal anything
  //you need to set it to an empty array
  switch (action.type){
    case 'POST_TRIP_DATA':
      return {
        tripData: action.tripData,
        location: action.location,
        startDate: action.startDate,
        endDate: action.endDate,
      }
    default:
      return state;
  }
};

export default reducerTripData;
//this is the api call