import { pipe, get } from 'lodash/fp';
import { selectRoot } from './root';

export const selectAddWishPopup = pipe([
  selectRoot,
  get('addWishPopup')
]);

export const selectIsAddWishPopupOpen = pipe([
  selectAddWishPopup,
  get(['isOpen'])
]);
