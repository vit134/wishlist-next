import { pipe, get, getOr } from 'lodash/fp';
import { selectRoot } from './root';

export const selectWish = pipe([
  selectRoot,
  get('wishes')
]);

export const selectWishesEntities = pipe([
  selectRoot,
  getOr({}, ['wishes', 'entities'])
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
