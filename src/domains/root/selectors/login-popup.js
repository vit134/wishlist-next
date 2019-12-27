import { pipe, get } from 'lodash/fp';
import { selectRoot } from './root';

export const selectLoginPopup = pipe([
  selectRoot,
  get('loginPopup')
]);

export const selectIsLoginPopupOpen = pipe([
  selectLoginPopup,
  get(['isOpen'])
]);
