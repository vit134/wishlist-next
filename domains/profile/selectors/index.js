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

export const selectWishesResult = pipe([
  selectProfilePageData,
  getOr([], ['wishes', 'result'])
]);

export const selectTotalWishesCount = pipe([
  selectWishesResult,
  size
]);

export const selectActiveTab = (state, ownProps) => pipe([
  selectProfilePageData,
  pageData => {
    const routerActiveTab = getOr(null, ['router', 'query', 'activeTab'])(ownProps);

    if (routerActiveTab) {
      return routerActiveTab;
    }

    return getOr(1, 'activeTab')(pageData);
  }
])(state);

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

export const selectImageModal = pipe([
  selectProfilePageData,
  get('imageModal'),
]);
