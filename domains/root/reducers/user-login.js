import { set, pipe } from 'lodash/fp';
import {
  SET_USER_LOGIN,

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../actions/user-login';

const initialState = {
  isLoading: false,
  isLogin: false,
  error: null,
  data: null,
};

export const userLoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      console.log('payload', payload);
      // return pipe([
      //   set(['isLogin'], true),
      //   set(['data'], payload)
      // ])(state);
      return {
        ...state,
        isLogin: payload.isLogin,
        data: payload.data,
      };

    case USER_LOGIN_REQUEST:
      return set(['isLoading'], true)(state);
    case USER_LOGIN_SUCCESS:
      return pipe([
        set(['isLoading'], false),
        set(['isLogin'], payload.data.success),
        set(['data'], payload.data.data),
        set(['error'], payload.data.error)
      ])(state);
    case USER_LOGIN_FAIL:
      return pipe([
        set(['isLoading'], false),
        set(['error'], payload.error)
      ])(state);
    default:
      return state;
  }
};
