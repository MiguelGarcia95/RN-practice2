import * as actionTypes from './actionTypes';
import {ENTRY_POINT} from '../../../env';
import {uiStartLoading, uiStopLoading, authGetToken} from './index';

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    dispatch(uiStartLoading());

    dispatch(authGetToken())
    .catch(() => {
      alert("No Valid Token Found");
    })
    .then(token => {
    // POST call to firebase storeImage function
      return fetch('https://us-central1-my-project-rn-te-1558941296674.cloudfunctions.net/storeImage', {
        method: 'POST',
        body: JSON.stringify({
          image: image.base64
        })
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

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
    .catch(() => {
      alert("No Valid Token Found");
    })
    .then(token => {
      return fetch(`${ENTRY_POINT}/places.json?auth=${token}`)
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

export const deletePlace = key => {
  return dispatch => {
    dispatch(removePlace(key))

    // dispatch(authGetToken())
    // .catch(() => {
    //   alert("No Valid Token Found");
    // })
    // .then(token => {
    //   dispatch(removePlace(key))
    //   return fetch(`${ENTRY_POINT}/places/${key}.json?auth=${token}`, {
    //     method: 'DELETE'
    //   })
    // })
    // .then(res => res.json())
    // .then(parsedRes => {
    //   console.log("DONE!")
    // })
    // .catch(err => {
    //   alert('Could not delete');
    //   console.log(err);
    // });
  }
}

export const removePlace = key => {
  return {
    type: actionTypes.REMOVE_PLACE,
    payload: {
      key: key
    }
  }
}

