import { pipe, get } from 'lodash/fp';
import { selectRoot } from './root';

export const selectWish = pipe([
  selectRoot,
  get('wish')
]);

export const selectIsAddWishLoading = pipe([
  selectWish,
  get(['isLoading'])
]);

export const selectIsAddWishStatus = pipe([
  selectWish,
  get(['status'])
]);

export const selectIsAddWishError = pipe([
  selectWish,
  get(['error'])
]);
