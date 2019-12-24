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

export const selectActiveTab = pipe([
  selectProfilePageData,
  getOr(1, 'activeTab'),
]);

export const selectResidense = pipe([
  selectProfilePageData,
  get('residense'),
]);

export const selectResidenseCountries = pipe([
  selectResidense,
  getOr({}, 'countries'),
]);

export const selectResidenseCities = pipe([
  selectResidense,
  getOr({}, 'cities'),
]);

export const selectSelectedCountryIso = pipe([
  selectResidenseCountries,
  get('selectedIso')
]);
