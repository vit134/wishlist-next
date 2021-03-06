import { set, pipe } from 'lodash/fp';
import Router from 'next/router';

import {
  SELECT_WISH,
  CHANGE_ACTIVE_TAB,

  GET_COUNTRIES_FETCHING,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  CLEAR_COUNTRIES_DATA,
  SET_SELECTED_COUNTRY_ISO,

  GET_CITIES_FETCHING,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAIL,

  SHOW_IMAGE_MODAL,
  HIDE_IMAGE_MODAL,

  CHANGE_FORM_FIELDS,
  CLEAR_FORM_FIELDS,
} from '../actions';

const initialState = [];

export const selectedWishesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_WISH:
      return payload.ids;
    default:
      return state;
  }
};

const activeTabinitialState = '1';

export const activeTabReducer = (state = activeTabinitialState, { type, payload }) => {
  switch (type) {
    case CHANGE_ACTIVE_TAB:
      const href = `${Router.route}?activeTab=${payload.id}`;
      Router.push(href, href, { shallow: true });
      return payload.id;
    default:
      return state;
  }
};

const residenceInitialState = {
  countries: {
    isLoading: false,
    data: {},
    error: null,
    selectedIso: null,
  },
  cities: {
    isLoading: false,
    data: {},
    error: null,
    selectedIso: null,
  },
};

export const residenceReducer = (state = residenceInitialState, { type, payload }) => {
  switch (type) {
    case GET_COUNTRIES_FETCHING:
      return set(['countries', 'isLoading'], true)(state);
    case GET_COUNTRIES_SUCCESS:
      return pipe([
        set(['countries', 'isLoading'], false),
        set(['countries', 'data'], payload.data),
      ])(state);
    case GET_COUNTRIES_FAIL:
      return pipe([
        set(['countries', 'isLoading'], false),
        set(['countries', 'error'], payload.error),
      ])(state);

    case GET_CITIES_FETCHING:
      return set(['cities', 'isLoading'], true)(state);
    case GET_CITIES_SUCCESS:
      return pipe([
        set(['cities', 'isLoading'], false),
        set(['cities', 'data'], payload.data),
      ])(state);
    case GET_CITIES_FAIL:
      return pipe([
        set(['cities', 'isLoading'], false),
        set(['cities', 'error'], payload.error),
      ])(state);

    case CLEAR_COUNTRIES_DATA:
      return pipe([
        set(['countries', 'data'], []),
        set(['cities', 'data'], []),
        set(['countries', 'selectedIso'], null),
      ])(state);
    case SET_SELECTED_COUNTRY_ISO:
      return set(['countries', 'selectedIso'], payload.iso)(state);
    default:
      return state;
  }
};

const imageModalinitialState = {
  isOpen: false,
  imageUrl: null,
};

export const imageModalReducer = (state = imageModalinitialState, { type, payload }) => {
  switch (type) {
    case SHOW_IMAGE_MODAL:
      return pipe([
        set(['isOpen'], true),
        set(['imageUrl'], payload.imageUrl),
      ])(state);
    case HIDE_IMAGE_MODAL:
      return pipe([
        set(['isOpen'], false),
        set(['imageUrl'], null),
      ])(state);
    default:
      return state;
  }
};

const formFiledsInitialState = {
  changedFields: {},
};

export const formFieldsReducer = (state = formFiledsInitialState, { type, payload }) => {
  switch (type) {
    case CHANGE_FORM_FIELDS:
      return set(['changedFields'], payload)(state);
    case CLEAR_FORM_FIELDS:
      return set(['changedFields'], {})(state);
    default:
      return state;
  }
};
