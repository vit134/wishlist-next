import {
  get,
  pipe,
  size,
  getOr,
  over,
  reduce,
  entries,
} from 'lodash/fp';
import { selectUserData } from 'domains/root/selectors/user-login';

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

export const selectFormFileds = pipe([
  selectProfilePageData,
  get('formFields'),
]);

export const selectChangedFormFields = pipe([
  selectFormFileds,
  get('changedFields'),
]);

export const selectIsProfileDataChanged = pipe([
  over([
    selectUserData,
    pipe([
      selectChangedFormFields,
      // omit(['keys']),
      // values,
      reduce((acc, el) => {
        // let { name, value } = el;

        // if (!name && !value && Array.isArray(el)) {
        //   name = 'holidays';
        //   value = el;

        //   acc[name] = value;
        //   return acc;
        // }

        // if (!name && Array.isArray(value)) {
        //   name = 'keys';
        // }

        // if (el.name === 'date_of_birth') {
        //   value = value.utc().format('YYYY-MM-DDTHH:mm:ss.000\\Z');
        // }

        // if (el.name === 'phone') {
        //   value = +getNumbersPhone(value);
        // }

        // if (name) {
        //   acc[name] = value;
        // }
        // return acc;
      }, {}),
    ])
  ]),
  ([userData, changedFields]) => {
    return pipe([
      pipe([
        entries,
        reduce((acc, [key, value]) => {
          // if (key === 'keys') {
          //   // если текущее колчиство праздников отличается от данных из профиля
          //   if (userData.holidays.length !== value.length) {
          //     acc.push({
          //       changed: { [key]: value.length },
          //       original: { [key]: userData.holidays.length },
          //     });

          //     return acc;
          //   }
          // }

          // if (key === 'holidays') {
          //   value.forEach((holiday, i) => {
          //     if (userData[key][i]) {
          //       if (holiday.value.name !== userData[key][i].name) {
          //         acc.push({
          //           changed: { [key]: holiday.value.name },
          //           original: { [key]: userData[key][i].name },
          //         });
          //       }

          //       if (String(holiday.value.date) !== String(userData[key][i].date)) {
          //         acc.push({
          //           changed: { [key]: holiday.value.date },
          //           original: { [key]: userData[key][i].date },
          //         });
          //       }
          //     }
          //   });

          //   return acc;
          // }

          // if (key && userData[key] !== value) {
          //   acc.push({
          //     changed: { [key]: value },
          //     original: { [key]: userData[key] },
          //   });
          // }

          return acc;
        }, [])
      ]),
      size,
      Boolean
    ])(changedFields);
  }
]);
