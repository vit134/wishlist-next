import {
  get,
  getOr,
  pipe,
  size,
} from 'lodash/fp';

export const selectUserPageData = get('userPage');

export const selectWishesEntities = pipe([
  selectUserPageData,
  getOr({}, ['wishes', 'entities'])
]);

export const selectWishesResult = pipe([
  selectUserPageData,
  getOr({}, ['wishes', 'result'])
]);

export const selectWishesData = pipe([
  selectUserPageData,
  getOr([], ['wishes', 'data'])
]);

export const selectTotalWishesCount = pipe([
  selectWishesData,
  size
]);

export const selectPagination = pipe([
  selectUserPageData,
  get(['pagination'])
]);

export const selectWishesCount = state => pipe([
  selectWishesResult,
  size,
])(state);

export const selectUserInfoData = pipe([
  selectUserPageData,
  get(['userInfo', 'data']),
]);

export const selectFilters = pipe([
  selectUserPageData,
  get(['filters'])
]);
