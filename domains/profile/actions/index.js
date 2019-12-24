export const SELECT_WISH = 'SELECT_WISH';
export const SELECT_ALL_WISH = 'SELECT_ALL_WISH';

export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';

export const GET_COUNTRIES_FETCHING = 'GET_COUNTRIES_FETCHING';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAIL = 'GET_COUNTRIES_FAIL';

export const GET_CITIES_FETCHING = 'GET_CITIES_FETCHING';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const GET_CITIES_FAIL = 'GET_CITIES_FAIL';

export const CLEAR_COUNTRIES_DATA = 'CLEAR_COUNTRIES_DATA';
export const SET_SELECTED_COUNTRY_ISO = 'SET_SELECTED_COUNTRY_ISO';

export const selectWish = ids => ({
  type: SELECT_WISH,
  payload: { ids },
});

export const selectAllWish = ids => ({
  type: SELECT_ALL_WISH,
  payload: { ids },
});

export const changeActiveTab = id => ({
  type: CHANGE_ACTIVE_TAB,
  payload: { id },
});

export const getCountriesFetching = () => ({
  type: GET_COUNTRIES_FETCHING,
});

export const getCountriesSuccess = data => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: { data },
});

export const getCountriesFail = error => ({
  type: GET_COUNTRIES_FAIL,
  payload: { error },
});

export const clearCountriesData = () => ({
  type: CLEAR_COUNTRIES_DATA,
});

export const setSelectedCountryIso = iso => ({
  type: SET_SELECTED_COUNTRY_ISO,
  payload: { iso },
});

export const getCitiesFetching = () => ({
  type: GET_CITIES_FETCHING,
});

export const getCitiesSuccess = data => ({
  type: GET_CITIES_SUCCESS,
  payload: { data },
});

export const getCitiesFail = error => ({
  type: GET_CITIES_FAIL,
  payload: { error },
});
