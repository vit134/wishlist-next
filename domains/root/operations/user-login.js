import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
} from '../actions/user-login';
import { closeLoginPopup } from '../actions/login-popup';

import { loginRequest } from '../../../src/requests';

export const userLogin = (userFormData) => dispatch => {
  dispatch(userLoginRequest());

  return loginRequest(userFormData)
    .then(data => {
      console.log(data);
      dispatch(userLoginSuccess(data));
      dispatch(closeLoginPopup());
    })
    .catch(error => dispatch(userLoginFail(error)));
};
