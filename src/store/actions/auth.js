import * as actionTypes from './actionTypes';
import {AUTH_APIKEY, AUTH_ENTRY} from '../../../env';

export const tryAuth = authData => {
  return dispatch => {
    dispatch(authSignup(authData));
  }
};

export const authSignup = authData => {
  return dispatch => {
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
      alert('AUTH FAILED! TRY AGAIN!');
    })
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
    })
  }
}