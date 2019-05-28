import * as actionTypes from './actionTypes';
import {AUTH_APIKEY} from '../../../env';

// `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=${AUTH_APIKEY}`

export const tryAuth = authData => {
  return {
    type: actionTypes.TRY_AUTH,
    authData: authData
  }
};

