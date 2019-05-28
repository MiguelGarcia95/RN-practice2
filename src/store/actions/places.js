import * as actionTypes from './actionTypes';
import {ENTRY_POINT} from '../../../env';

export const addPlace = (placeName, location, image) => {
  return {
    type: actionTypes.ADD_PLACE,
    payload: {
      placeName: placeName,
      location: location,
      image: image
    }
  };
}

export const deletePlace = key => {
  return {
    type: actionTypes.DELETE_PLACE,
    payload: {
      placeKey: key
    }
  };
}


