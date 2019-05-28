import * as actionTypes from './actionTypes';
import {AUTH_APIKEY, AUTH_ENTRY} from '../../../env';
import {uiStartLoading, uiStopLoading} from './index';
import startMainTabs from '../../screens/MainTabs/startMainTabs';

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(authSignup(authData, authMode));
  }
};

export const authSignup = (authData, authMode) => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch(`${AUTH_ENTRY}/signupNewUser?key=${AUTH_APIKEY}`, {
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
      if (parsedRes.error) {
        alert('AUTH FAILED! TRY AGAIN!')
      } else {
        startMainTabs();
      }
    })
  }
}

export const authSignin = authData => {

}