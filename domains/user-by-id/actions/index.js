export const GET_WISHES_BY_USER_REQUEST = 'GET_WISHES_BY_USER_REQUEST';
export const GET_WISHES_BY_USER_SUCCESS = 'GET_WISHES_BY_USER_SUCCESS';
export const GET_WISHES_BY_USER_FAIL = 'GET_WISHES_BY_USER_FAIL';

export const SET_WISHES = 'SET_WISHES';

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';

export const SET_USER_INFO = 'SET_USER_INFO';

export const wishesFetching = () => ({
  type: GET_WISHES_BY_USER_REQUEST
});

export const successWishesFetching = data => ({
  type: GET_WISHES_BY_USER_SUCCESS,
  payload: { data }
});

export const failWishesFetching = error => ({
  type: GET_WISHES_BY_USER_FAIL,
  payload: { error }
});

export const setWishes = data => ({
  type: SET_WISHES,
  payload: { data }
});

export const userInfoFetching = () => ({
  type: GET_USER_INFO_REQUEST
});

export const successUserInfoFetching = data => ({
  type: GET_USER_INFO_SUCCESS,
  payload: { data }
});

export const failUserInfoFetching = error => ({
  type: GET_USER_INFO_FAIL,
  payload: { error }
});

export const setUserInfo = data => ({
  type: SET_USER_INFO,
  payload: { data }
});
