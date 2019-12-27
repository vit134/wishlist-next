export const GET_WISHES_REQUEST = 'GET_WISHES_REQUEST';
export const GET_WISHES_SUCCESS = 'GET_WISHES_SUCCESS';
export const GET_WISHES_FAIL = 'GET_WISHES_FAIL';

export const SET_FILTERED_WISHES = 'SET_FILTERED_WISHES';

export const ADD_WISH_FETCHING = 'ADD_WISH_FETCHING';
export const ADD_WISH_SUCCESS = 'ADD_WISH_SUCCESS';
export const ADD_WISH_FAIL = 'ADD_WISH_FAIL';

export const DELETE_WISH_FETCHING = 'DELETE_WISH_FETCHING';
export const DELETE_WISH_SUCCESS = 'DELETE_WISH_SUCCESS';
export const DELETE_WISH_FAIL = 'DELETE_WISH_FAIL';

export const wishesFetching = () => ({
  type: GET_WISHES_REQUEST,
});

export const successWishesFetching = data => ({
  type: GET_WISHES_SUCCESS,
  payload: { data },
});

export const failWishesFetching = error => ({
  type: GET_WISHES_FAIL,
  payload: { error },
});

export const setWishes = data => ({
  type: SET_FILTERED_WISHES,
  payload: { data },
});

export const addWishFetching = () => ({
  type: ADD_WISH_FETCHING,
});

export const addWishSuccess = (data) => ({
  type: ADD_WISH_SUCCESS,
  payload: data,
});

export const addWishFail = (error) => ({
  type: ADD_WISH_FAIL,
  payload: error,
});

export const deleteWishFetching = () => ({
  type: DELETE_WISH_FETCHING,
});

export const deleteWishSuccess = (data) => ({
  type: DELETE_WISH_SUCCESS,
  payload: data,
});

export const deleteWishFail = (error) => ({
  type: DELETE_WISH_FAIL,
  payload: error,
});
