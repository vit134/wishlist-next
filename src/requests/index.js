import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export const userInfoRequst = (req) => {
  return axios.get('https://wishlist-next.herokuapp.com/api/login', {
    headers: {
      ...headers,
      cookie: req.headers.cookie
    },
    withCredentials: 'include'
  });
};

export const loginRequest = (data) => {
  return axios.post('/api/login', data, { headers });
};

export const logoutRequest = (data) => {
  return axios.get('/api/logout', {
    headers,
    withCredentials: 'include'
  });
};

export const registrationRequest = (data) => {
  return axios.post('/api/registration', data, { headers });
};

export const wishesRequest = (userId) => {
  return axios.get(`https://wishlist-next.herokuapp.com/api/wishes?user=${userId}`, { headers });
};

export const wishByIdRequest = (id) => {
  return axios.get(`https://wishlist-next.herokuapp.com/api/wishes/${id}`, { headers });
};

export const addWishRequest = (data) => {
  return axios.post('/api/wishes', data, {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data'
  });
};
