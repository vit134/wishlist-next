import { normalizedWishes } from '../normlize';

import {
  GET_WISHES_BY_USER_REQUEST,
  GET_WISHES_BY_USER_SUCCESS,
  GET_WISHES_BY_USER_FAIL,

  SET_FILTERED_WISHES,

  SET_FILTERS,
  CLEAR_FILTERS,

  SET_PAGINATION,

  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
} from '../actions';

const wishesInitialState = {
  isLoading: false,
  error: null,
  entities: {},
  result: [],
  data: null,
};

const getWishesEntities = wishes => normalizedWishes({ wishes });

export const wishesReducer = (state = wishesInitialState, { type, payload }) => {
  switch (type) {
    case GET_WISHES_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WISHES_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entities: getWishesEntities(payload.data).entities.wishes,
        result: getWishesEntities(payload.data).result.wishes,
      };
    case GET_WISHES_BY_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case SET_FILTERED_WISHES:
      return {
        ...state,
        data: payload.data,
      };
    default:
      return state;
  }
};

const userInfoInitialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const userInfoReducer = (state = userInfoInitialState, { type, payload }) => {
  switch (type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };

    case GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
};

export const filtersInitialState = {
  name: '',
  categories: undefined,
  tags: undefined,
  date: 'asc',
  price: 'desc',
};

export const filtersReducer = (state = filtersInitialState, { type, payload }) => {
  switch (type) {
    case SET_FILTERS:
      return {
        ...state,
        ...payload.filters,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        ...filtersInitialState,
      };
    default:
      return state;
  }
};

const paginationInitialState = {
  pageSize: 10,
  currentPage: 1,
};

export const paginationReducer = (state = paginationInitialState, { type, payload }) => {
  switch (type) {
    case SET_PAGINATION:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
