import {
  get,
  pipe,
  size,
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
