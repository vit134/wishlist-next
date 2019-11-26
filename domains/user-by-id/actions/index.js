import { entries, pipe, values } from 'lodash/fp';
import { selectWishesEntities, selectPagination } from '../selectors';
import { sorting } from '../../../src/helpers';
export const GET_WISHES_BY_USER_REQUEST = 'GET_WISHES_BY_USER_REQUEST';
export const GET_WISHES_BY_USER_SUCCESS = 'GET_WISHES_BY_USER_SUCCESS';
export const GET_WISHES_BY_USER_FAIL = 'GET_WISHES_BY_USER_FAIL';
export const SET_FILTERED_WISHES = 'SET_FILTERED_WISHES';

export const SET_FILTERS = 'SET_FILTERS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const SET_PAGINATION = 'SET_PAGINATION';

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL';
export const SET_USER_INFO = 'SET_USER_INFO';

export const wishesFetching = () => ({
  type: GET_WISHES_BY_USER_REQUEST,
});

export const successWishesFetching = data => (dispatch, getState) => {
  dispatch({
    type: GET_WISHES_BY_USER_SUCCESS,
    payload: { data },
  });

  const state = getState();
  const pagination = selectPagination(state);

  dispatch(applyWishesWithPagination(pagination));
};

export const failWishesFetching = error => ({
  type: GET_WISHES_BY_USER_FAIL,
  payload: { error },
});

export const applyWishesWithPagination = pagination => (dispatch, getState) => {
  const all = values(selectWishesEntities(getState()));
  const withPagination = pipe([
    sorting.currentPage(pagination.currentPage, pagination.pageSize),
  ])(all);

  dispatch(setWishes(withPagination));
};

export const applyWishesWithFilters = filters => (dispatch, getState) => {
  const state = getState();
  const data = values(selectWishesEntities(state));
  const filtersArray = entries(filters);

  const filt = filtersArray.map(([name, value]) => {
    return sorting[name](value);
  });

  const withFilters = pipe(filt)(data);

  dispatch(setWishes(withFilters));
  const { pageSize } = selectPagination(state);

  dispatch(setPagination({
    currentPage: withFilters.length > pageSize,
  }));
};

export const setWishes = data => ({
  type: SET_FILTERED_WISHES,
  payload: { data },
});

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: { filters },
});

export const setPagination = pagination => ({
  type: SET_PAGINATION,
  payload: pagination,
});

export const clearFilters = () => ({
  type: SET_FILTERS,
});

export const userInfoFetching = () => ({
  type: GET_USER_INFO_REQUEST,
});

export const successUserInfoFetching = data => ({
  type: GET_USER_INFO_SUCCESS,
  payload: { data },
});

export const failUserInfoFetching = error => ({
  type: GET_USER_INFO_FAIL,
  payload: { error },
});

export const setUserInfo = data => ({
  type: SET_USER_INFO,
  payload: { data },
});
