import * as actionTypes from '../actions/actionTypes';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLACES:
      return {
        ...state,
        places: action.payload.places
      }
    case actionTypes.REMOVE_PLACE:
      const places = state.places.reduce((placesArray, place) => {
        if (place.key !== action.payload.key) {
          placesArray.push(place);
        }
        return placesArray;
      }, [])
      return {
        ...state,
        places: places
      }
    default:
      return state;
  }
}

export default reducer;