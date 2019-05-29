import AsyncStorage from '@react-native-community/async-storage';

import * as actionTypes from './actionTypes';
import {AUTH_APIKEY, AUTH_ENTRY, AUTH_REFRESH_TOKEN} from '../../../env';
import {uiStartLoading, uiStopLoading} from './index';
import startMainTabs from '../../screens/MainTabs/startMainTabs';

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(uiStartLoading());
    if (authMode === 'login') {
      dispatch(authSignup(authData, 'verifyPassword'));
    } else {
      dispatch(authSignup(authData, 'signupNewUser'));
    }
  }
};

export const authSignup = (authData, endpoint) => {
  return dispatch => {
    fetch(`${AUTH_ENTRY}/${endpoint}?key=${AUTH_APIKEY}`, {
      method: 'POST',
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .catch(err => { 
      console.log(err);
      dispatch(uiStopLoading());
      alert('AUTH FAILED! TRY AGAIN!');
    })
    .then(res => res.json())
    .then(parsedRes => {
      dispatch(uiStopLoading());
      console.log(parsedRes)
      if (parsedRes.error || !parsedRes.idToken) {
        alert('AUTH FAILED! TRY AGAIN!')
      } else {
        dispatch(authStoreToken(parsedRes.idToken, parsedRes.expiresIn, parsedRes.refreshToken));
        startMainTabs();
      }
    })
  }
}

export const authStoreToken = (token, expiresIn, refreshToken) => {
  return dispatch => {
    dispatch(authSetToken(token));
    const now = new Date();
    const expiryDate = now.getTime() + expiresIn * 1000;
    AsyncStorage.setItem("p:auth:token", token);
    AsyncStorage.setItem("p:auth:refreshToken", refreshToken);
    // AsyncStorage.setItem("p:auth:expiryDate", expiryDate.toString());
  }
}

export const authSetToken = token => {
  return {
    type: actionTypes.AUTH_SET_TOKEN,
    payload: {
      token: token
    }
  }
}

export const authGetToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve, reject) => {
      const token = getState().auth.token;
      if (!token) {
        let fetchedToken;
        AsyncStorage.getItem("p:auth:token")
          .then(tokenFromStorage => {
            if (!tokenFromStorage) {
              reject();
              return;
            }
            fetchedToken = tokenFromStorage;
            return AsyncStorage.getItem('p:auth:expiryDate')
          }) 
          .then(expiryDate => {
            const parsedExpiryDate = new Date(parseInt(expiryDate));
            const now = new Date();
            if (parsedExpiryDate > now) {
              dispatch(authSetToken(fetchedToken));
              resolve(fetchedToken);
            } else {
              reject();
            }
          })
          .catch(err => reject())
      } else {
        resolve(token);
      }
    });
    promise.catch(err => {
      AsyncStorage.getItem("p:auth:refreshToken")
        .then(refreshToken => {
          console.log(refreshToken)
          return fetch(`${AUTH_REFRESH_TOKEN}`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "grant_type=refresh_token&refresh_token=" + refreshToken
          })
        })
        .then(res => console.log(res))
        .catch(err => {
          reject();
          dispatch(authClearStorage())
        });
      
    });
    return promise;
  }
}

export const authAutoSignIn = () =>{
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        startMainTabs();
      })
      .catch(err => console.log('Failed to fetch token!'))
  }
}

export const authClearStorage = () => {
  return dispatch => {
    AsyncStorage.removeItem('p:auth:token');
    AsyncStorage.removeItem('p:auth:expiryDate');
  }
}