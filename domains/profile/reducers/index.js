import { SELECT_WISH, CHANGE_ACTIVE_TAB } from '../actions';

const initialState = [];

export const selectedWishesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_WISH:
      return payload.ids;
    default:
      return state;
  }
};

const activeTabinitialState = 1;

export const activeTabReducer = (state = activeTabinitialState, { type, payload }) => {
  switch (type) {
    case CHANGE_ACTIVE_TAB:
      return payload.id;
    default:
      return state;
  }
};
