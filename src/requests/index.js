import axios from 'axios';
import { getResidenseUrl } from './helpers';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const HOST_NAME = process.env.APP_URL || `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`;

export const getPosts = () => dispatch =>
  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: [],
  }).then(response => dispatch({ type: 'FOO', payload: response.data }));

export const userLoginInfoRequst = (req) => {
  return axios.get(`${HOST_NAME}/api/login`, {
    headers: {
      ...headers,
      cookie: req.headers.cookie,
    },
    withCredentials: 'include',
  });
};

export const userInfoRequst = username => {
  return axios.get(`${HOST_NAME}/api/user/${username}/info`, { headers });
};

export const loginRequest = (data) => {
  return axios.post('/api/login', data, { headers });
};

export const logoutRequest = () => {
  return axios.get('/api/logout', {
    headers,
    withCredentials: 'include',
  });
};

export const userUpdateRequest = data => (
  axios.put('/api/user/update', data, { headers })
);

export const registrationRequest = (data) => {
  return axios.post('/api/registration', data, { headers });
};

export const wishesRequest = (userId) => {
  return axios.get(`${HOST_NAME}/api/wishes?user=${userId}`, { headers });
};

export const wishByIdRequest = (id) => {
  return axios.get(`${HOST_NAME}/api/wishes/${id}`, { headers });
};

export const wishByUserIdRequest = (userId) => {
  return axios.get(`${HOST_NAME}/api/wishes/by-user-id/${userId}`, { headers });
};

export const addWishRequest = (data) => {
  return axios.post('/api/wishes', data, {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data',
  });
};

export const deleteWishesRequest = ids => {
  return axios.delete(`${HOST_NAME}/api/wishes/`, { data: ids }, { headers });
};

export const getAllUsers = () => {
  return axios.get(`${HOST_NAME}/api/user/all`, { headers });
};

export const getAllWishes = () => {
  return axios.get(`${HOST_NAME}/api/wishes/all`, { headers });
};

export const getCountriesRequest = (name) => {
  const url = getResidenseUrl({ method: 'countries', filter: { name } });
  return axios.get(url);
};

export const getCitiesRequest = ({ name, countryIso, ...props }) => {
  console.log(props);
  const url = getResidenseUrl({ method: 'cities', filter: { name, countryIso }, ...props });
  return axios.get(url);
};
