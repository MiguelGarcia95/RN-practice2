import * as actionTypes from './actionTypes';
import {ENTRY_POINT} from '../../../env';
import {uiStartLoading, uiStopLoading, authGetToken} from './index';

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
    .then(res => res.json())
    .then(parsed => {
      console.log(parsed);
      dispatch(uiStopLoading());
    })
    .catch(err => {
      console.log(err);
      alert('Something bad happened!');
      dispatch(uiStopLoading());
    })
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

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        return fetch(`${ENTRY_POINT}/places.json?auth=${token}`)
      })
      .catch(() => {
        alert("No Valid Token Found");
      })
      .then(res => res.json())
      .then(parsedRes => {
        if (parsedRes.error) {
          alert('Something bad happened!');
          console.log(err)
        }
        const places = [];
        for(let key in parsedRes) {
          places.push({
            ...parsedRes[key],
            image: {
              uri: parsedRes[key].image
            },
            key: key
          })
        }
        dispatch(setPlaces(places))
      })
      .catch(err => {
        alert('Something bad happened!');
        console.log(err)
      })

  }
}

export const setPlaces = places => {
  return {
    type: actionTypes.SET_PLACES,
    payload: {
      places: places
    }
  }
}


