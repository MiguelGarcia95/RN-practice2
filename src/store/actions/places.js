import * as actionTypes from './actionTypes';
import {ENTRY_POINT} from '../../../env';
import {uiStartLoading, uiStopLoading} from './index';

export const addPlace = (placeName, location, image) => {
  return dispatch => {

    // POST call to firebase storeImage function
    dispatch(uiStartLoading());
    fetch('https://us-central1-my-project-rn-te-1558941296674.cloudfunctions.net/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: image.base64
      })
    })
    .catch(err => {
      console.log(err);
      alert('Something bad happened!');
      dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(parsedRes => {

      // Once Image is stored, get url
      const placeData = {
        name: placeName,
        location:  location,
        image: parsedRes.imageUrl
      };
      
      // create place
      return fetch(`${ENTRY_POINT}/places.json`, {
        method: "POST",
        body: JSON.stringify(placeData)
      })
    })
    .catch(err => {
      console.log(err);
      alert('Something bad happened!');
      dispatch(uiStopLoading());
    })
    .then(res => res.json())
    .then(parsed => {
      console.log(parsed);
      dispatch(uiStopLoading());
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


