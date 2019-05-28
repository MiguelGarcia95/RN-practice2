import * as actionTypes from './actionTypes';
import {AUTH_APIKEY, AUTH_ENTRY} from '../../../env';
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
        startMainTabs();
        dispatch(authSetToken(parsedRes.idToken));
      }
    })
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
    return new Promise((resolve, reject) => {
      const token = getState().auth.token;
      if (!token) {
        reject();      
      } else {
        resolve(token);
      }
    });
  }
}