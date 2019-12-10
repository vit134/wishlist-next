import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,

  userLogoutRequest,
  userLogoutSuccess,
  userLogoutFail,

  userRegistrationRequest,
  userRegistrationSuccess,
  userRegistrationFail,
} from '../actions/user';
import { closeLoginPopup } from '../actions/login-popup';

import {
  loginRequest,
  logoutRequest,
  registrationRequest,
} from '../../../src/requests';

export const userLogin = (userFormData) => dispatch => {
  dispatch(userLoginRequest());

  return loginRequest(userFormData)
    .then(({ data }) => {
      if (data.success) {
        dispatch(userLoginSuccess(data));
      } else {
        throw data.error;
      }
      dispatch(closeLoginPopup());
    })
    .catch(error => {
      dispatch(userLoginFail({ error }));
    });
};

export const userLogout = () => dispatch => {
  dispatch(userLogoutRequest());

  return logoutRequest()
    .then(data => {
      dispatch(userLogoutSuccess(data));
      dispatch(closeLoginPopup());
    })
    .catch(error => {
      dispatch(userLogoutFail(error));
    });
};

export const userRegistration = userFormData => dispatch => {
  dispatch(userRegistrationRequest());
  console.log(userFormData);
  return registrationRequest(userFormData)
    .then(({ data }) => {
      if (data.success) {
        dispatch(userRegistrationSuccess(data));
      } else {
        throw data.error;
      }
      dispatch(closeLoginPopup());
    })
    .catch(error => {
      dispatch(userRegistrationFail({ error }));
    });
};
