import { SELECT_WISH } from '../actions';

const initialState = [];

export const selectedWishesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_WISH:
      return payload.ids;
    default:
      return state;
  }
};
