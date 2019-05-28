import * as actionTypes from './actionTypes';
import {ENTRY_POINT} from '../../../env';

export const addPlace = (placeName, location, image) => {
  return dispatch => {

    const placeData = {
      name: placeName,
      location:  location
    };

    fetch('https://us-central1-my-project-rn-te-1558941296674.cloudfunctions.net/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: image.base64
      })
    })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes)
    })

    // fetch(`${ENTRY_POINT}/places.json`, {
    //   method: "POST",
    //   body: JSON.stringify(placeData)
    // })
    // .catch(err => console.log(err))
    // .then(res => res.json())
    // .then(parsed => {
    //   console.log(parsed);
    // })


     
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


