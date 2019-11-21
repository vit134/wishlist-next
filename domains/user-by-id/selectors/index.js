import { createSelector } from 'reselect';
import {
  get,
  getOr,
  pipe,
  join,
  values,
  size,
} from 'lodash/fp';
import { reduce } from 'lodash';

export const selectUserPageData = get('userPage');

export const selectWishesEntities = getOr({}, ['wishes', 'entities']);
export const selectWishesResult = getOr({}, ['wishes', 'result']);

export const selectWishesData = pipe([
  selectUserPageData,
  selectWishesEntities,
  values,
]);

export const selectWishesCount = pipe([
  selectUserPageData,
  selectWishesResult,
  size,
]);

export const selectUserInfoData = pipe([
  selectUserPageData,
  get(['userInfo', 'data']),
]);

export const selectFilters = pipe([
  selectUserPageData,
  get(['filters']),
]);

export const selectFiltersString = createSelector(
  pipe([
    selectFilters,
    filters => reduce(filters, (result, value, key) => {
      if (value) {
        result.push(`${key}=${value}`);
      }
      return result;
    }, []),
  ]),
  filters => join(';', filters)
);
