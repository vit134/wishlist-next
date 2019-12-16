import { uniq, isEqual } from 'lodash/fp';

import {
  SELECT_WISH,
  SELECT_ALL_WISH,
} from '../actions';

const initialState = [];

export const selectedWishesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_WISH:
      return payload.ids;

    case SELECT_ALL_WISH:
      return isEqual(state, payload.ids)
        ? []
        : uniq(payload.ids, state);
    default:
      return state;
  }
};
