import { set } from 'lodash/fp';

import {
  OPEN_LOGIN_POPUP,
  CLOSE_LOGIN_POPUP,
} from '../actions/login-popup';

const initialState = {
  isOpen: false,
};

export const loginPopupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_LOGIN_POPUP:
      return set(['isOpen'], true)(state);

    case CLOSE_LOGIN_POPUP:
      return set(['isOpen'], false)(state);
    default:
      return state;
  }
};
