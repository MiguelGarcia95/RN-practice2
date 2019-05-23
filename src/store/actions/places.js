import * as actionTypes from './actionTypes';

export const addPlace = placeName => {
  return {
    type: actionTypes.ADD_PLACE,
    payload: {
      placeName: placeName
    }
  };
}

export const deletePlace = () => {
  return {
    type: actionTypes.DELETE_PLACE
  };
}

export const selectPlace = key => {
  return {
    type: actionTypes.SELECT_PLACE,
    payload: {
      placeKey: key
    }
  };
}

export const unselectPlace = () => {
  return {
    type: actionTypes.UNSELECT_PLACE
  };
}

