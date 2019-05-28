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
    default:
      return state;
  }
}

export default reducer;