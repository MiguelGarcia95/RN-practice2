import * as actionTypes from '../actions/actionTypes';

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: `${Math.random()}`, 
          name: action.payload.placeName,
          image: action.payload.image,
          location: action.payload.location,
        }),
      }
    case actionTypes.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.payload.placeKey;
        })
      }
    default:
      return state;
  }
}

export default reducer;