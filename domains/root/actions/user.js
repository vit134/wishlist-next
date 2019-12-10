export const SET_USER_LOGIN = 'SET_USER_LOGIN';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL';

export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_FAIL = 'USER_REGISTRATION_FAIL';

export const setUserLogin = ({ isLogin, data }) => ({
  type: SET_USER_LOGIN,
  payload: { isLogin, data },
});

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const userLoginFail = (error) => ({
  type: USER_LOGIN_FAIL,
  payload: error,
});

export const userLogoutRequest = () => ({
  type: USER_LOGOUT_REQUEST,
});

export const userLogoutSuccess = (data) => ({
  type: USER_LOGOUT_SUCCESS,
  payload: data,
});

export const userLogoutFail = (error) => ({
  type: USER_LOGOUT_FAIL,
  payload: error,
});

export const userRegistrationRequest = () => ({
  type: USER_REGISTRATION_REQUEST,
});

export const userRegistrationSuccess = data => ({
  type: USER_REGISTRATION_SUCCESS,
  payload: data,
});

export const userRegistrationFail = error => ({
  type: USER_REGISTRATION_FAIL,
  payload: error,
});
