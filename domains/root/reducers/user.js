import { set, pipe } from 'lodash/fp';
import {
  SET_USER_LOGIN,

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,

  USER_REGISTRATION_REQUEST,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
} from '../actions/user';

const initialState = {
  isLoading: false,
  isLogin: false,
  error: null,
  data: null,
};

export const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        isLogin: payload.isLogin,
        data: payload.data,
      };

    case USER_LOGIN_REQUEST:
      return set(['isLoading'], true)(state);
    case USER_LOGIN_SUCCESS:
      console.log(payload);
      return pipe([
        set(['isLoading'], false),
        set(['isLogin'], payload.success),
        set(['data'], payload.data)
      ])(state);
    case USER_LOGIN_FAIL:
      return pipe([
        set(['isLoading'], false),
        set(['error'], payload.error)
      ])(state);

    case USER_LOGOUT_REQUEST:
      return set(['isLoading'], true)(state);
    case USER_LOGOUT_SUCCESS:
      return pipe([
        set(['isLoading'], false),
        set(['isLogin'], !payload.data.success),
        set(['data'], null)
      ])(state);
    case USER_LOGOUT_FAIL:
      return pipe([
        set(['isLoading'], false),
        set(['error'], payload.error)
      ])(state);

    case USER_REGISTRATION_REQUEST:
      return set(['isLoading'], true)(state);
    case USER_REGISTRATION_SUCCESS:
      console.log(payload);
      return pipe([
        set(['isLoading'], false),
        set(['isLogin'], payload.success),
        set(['data'], payload.data)
      ])(state);
    case USER_REGISTRATION_FAIL:
      return pipe([
        set(['isLoading'], false),
        set(['error'], payload.error)
      ])(state);

    default:
      return state;
  }
};
