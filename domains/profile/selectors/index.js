import {
  get,
  pipe,
  size,
  getOr,
} from 'lodash/fp';

export const selectProfilePageData = get('profilePage');

export const selectSelectedWishes = pipe([
  selectProfilePageData,
  get('selectedWishesIds'),
]);

export const selectSelectedWishesCount = pipe([
  selectSelectedWishes,
  size
]);

export const selectWishesData = pipe([
  selectProfilePageData,
  getOr([], ['wishes', 'data'])
]);

export const selectTotalWishesCount = pipe([
  selectWishesData,
  size
]);
