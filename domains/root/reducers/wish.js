import { set, pipe } from 'lodash/fp';
import {
  ADD_WISH_FETCHING,
  ADD_WISH_SUCCESS,
  ADD_WISH_FAIL,
} from '../actions/wish';

const initialState = {
  isLoading: false,
  status: null,
  error: null,
};

export const wishReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_WISH_FETCHING:
      return set(['isLoading'], true)(state);
    case ADD_WISH_SUCCESS:
      return pipe([
        set(['isLoading'], false),
        set(['status'], true),
      ])(state);
    case ADD_WISH_FAIL:
      return pipe([
        set(['isLoading'], false),
        set(['status'], false),
        set(['error'], payload.error)
      ])(state);

    default:
      return state;
  }
};
