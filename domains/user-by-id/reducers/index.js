import {
  GET_WISHES_BY_USER_REQUEST,
  GET_WISHES_BY_USER_SUCCESS,
  GET_WISHES_BY_USER_FAIL,
  SET_FILTERS,
  CLEAR_FILTERS,

  GET_USER_INFO_REQUEST,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL
} from '../actions';

const wishesInitialState = {
  isLoading: false,
  data: [],
  error: null
};

export const wishesReducer = (state = wishesInitialState, { type, payload }) => {
  switch (type) {
    case GET_WISHES_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_WISHES_BY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data
      };
    case GET_WISHES_BY_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    default:
      return state;
  }
};

const userInfoInitialState = {
  isLoading: false,
  data: [],
  error: null
};

export const userInfoReducer = (state = userInfoInitialState, { type, payload }) => {
  switch (type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data
      };

    case GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error
      };
    default:
      return state;
  }
};

const filtersInitialState = {
  search: '',
  categories: 'phones',
  tags: '',
  date: 'asc',
  price: 'desc',
  pageSize: 10,
  currentPage: 1
};

export const filtersReducer = (state = filtersInitialState, { type, payload }) => {
  switch (type) {
    case SET_FILTERS:
      return {
        ...state,
        ...payload.filters
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        ...filtersInitialState
      };
    default:
      return state;
  }
};
