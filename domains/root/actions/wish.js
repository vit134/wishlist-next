export const ADD_WISH_FETCHING = 'ADD_WISH_FETCHING';
export const ADD_WISH_SUCCESS = 'ADD_WISH_SUCCESS';
export const ADD_WISH_FAIL = 'ADD_WISH_FAIL';

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
