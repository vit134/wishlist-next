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

  userUpdateFetching,
  userUpdateSuccess,
  userUpdateFail,
} from '../actions/user';
import { closeLoginPopup } from '../actions/login-popup';
import { notification } from 'antd';

import {
  loginRequest,
  logoutRequest,
  registrationRequest,
  userUpdateRequest,
} from '../../../src/requests';

notification.config({
  placement: 'bottomRight',
  duration: 5,
});

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

export const userUpdate = data => dispatch => {
  dispatch(userUpdateFetching());

  return userUpdateRequest(data)
    .then(({ data }) => {
      if (data.success) {
        dispatch(userUpdateSuccess(data));
        notification.success({
          message: 'Данные профиля успешно обновлены',
        });
      } else {
        throw data.error;
      }
    })
    .catch(error => {
      dispatch(userUpdateFail(error));
      notification.error({
        message: 'Произошла непредвиденная ошибка',
      });

      console.error(error);
    });
};
