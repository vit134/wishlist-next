import { set } from 'lodash/fp';

import {
  OPEN_ADD_WISH_POPUP,
  CLOSE_ADD_WISH_POPUP,
} from '../actions/add-wish-popup';

const initialState = {
  isOpen: false,
};

export const addWishPopupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_ADD_WISH_POPUP:
      return set(['isOpen'], true)(state);

    case CLOSE_ADD_WISH_POPUP:
      return set(['isOpen'], false)(state);
    default:
      return state;
  }
};
