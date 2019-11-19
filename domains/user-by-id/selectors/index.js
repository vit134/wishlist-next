import { get, pipe } from 'lodash/fp';

export const selectUserPageData = get('userPage');

export const selectWishesData = pipe([
  selectUserPageData,
  get(['wishes', 'data'])
]);

export const selectUserInfoData = pipe([
  selectUserPageData,
  get(['userInfo', 'data'])
]);
