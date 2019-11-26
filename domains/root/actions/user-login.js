export const SET_USER_LOGIN = 'SET_USER_LOGIN';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

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
