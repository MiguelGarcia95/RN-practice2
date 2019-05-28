import * as actionTypes from './actionTypes';
import {ENTRY_POINT} from '../../../env';

export const addPlace = (placeName, location, image) => {
  return dispatch => {

    const placeData = {
      name: placeName,
      location:  location
    }

    fetch(`${ENTRY_POINT}/places.json`, {
      method: "POST",
      body: JSON.stringify(placeData)
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsed => {
      console.log(parsed);
    })
     
    // dispatch({
    //   type: actionTypes.ADD_PLACE,
    //   payload: {
    //     placeName: placeName,
    //     location: location,
    //     image: image
    //   }
    // })

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


