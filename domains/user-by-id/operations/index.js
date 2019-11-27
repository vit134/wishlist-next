import {
  wishesFetching,
  successWishesFetching,
  failWishesFetching,

  setFilters,
  clearFilters,

  setPagination,

  userInfoFetching,
  successUserInfoFetching,
  failUserInfoFetching,
} from '../actions';
import { wishByUserIdRequest, userInfoRequst } from '../../../src/requests';

export const getWishes = (userId) => dispatch => {
  dispatch(wishesFetching());

  return wishByUserIdRequest(userId)
    .then(result => dispatch(successWishesFetching(result.data.data)))
    .catch(error => dispatch(failWishesFetching(error)));
};

export const getUserInfo = (userId) => dispatch => {
  dispatch(userInfoFetching());

  return userInfoRequst(userId)
    .then(result => dispatch(successUserInfoFetching(result.data.data)))
    .catch(error => dispatch(failUserInfoFetching(error)));
};

export const setFilteredWishesData = filters => (dispatch, getState) => {
  dispatch(setFilters(filters));

  // const state = getState();

  // const filteredData = selectWishesWithFilters(state);
  // const filterIsInitial = isFilterInitial(filters);

  // dispatch(setWishes(filterIsInitial ? null : filteredData));
};

export const setPaginationWishesData = pagination => (dispatch, getState) => {
  dispatch(setPagination(pagination));
  dispatch(clearFilters());

  // const state = getState();

  // const filteredData = selectWishesWithPagination(state);

  // dispatch(setWishes(filteredData));
};
