import {
  getCountriesFetching,
  getCountriesSuccess,
  getCountriesFail,

  getCitiesFetching,
  getCitiesSuccess,
  getCitiesFail,
} from 'domains/profile/actions';
import { getCountriesRequest, getCitiesRequest } from 'requests';

const resolveCountriesResult = data => {
  return data.reduce((acc, el) => {
    acc[el.id] = { ...el };
    return acc;
  }, {});
};

export const getCountries = search => dispatch => {
  dispatch(getCountriesFetching());

  return getCountriesRequest(search)
    .then(({ data }) => {
      if (data.success) {
        const { result } = data;
        const resolvedResult = resolveCountriesResult(result);
        dispatch(getCountriesSuccess(resolvedResult));
      } else {
        throw data.error;
      }
    })
    .catch(error => dispatch(getCountriesFail(error)));
};

export const getCities = search => dispatch => {
  dispatch(getCitiesFetching());

  return getCitiesRequest(search)
    .then(({ data }) => {
      if (data.success) {
        const { result } = data;
        const resolvedResult = resolveCountriesResult(result);
        dispatch(getCitiesSuccess(resolvedResult));
      } else {
        throw data.error;
      }
    })
    .catch(error => dispatch(getCitiesFail(error)));
};
