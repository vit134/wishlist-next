import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export const getPosts = () => dispatch =>
  axios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts`,
    headers: []
  }).then(response => dispatch({ type: 'FOO', payload: response.data }));

// http://localhost:3000

export const userLoginInfoRequst = (req) => {
  return axios.get('http://localhost:3000/api/login', {
    headers: {
      ...headers,
      cookie: req.headers.cookie
    },
    withCredentials: 'include'
  });
};

export const userInfoRequst = username => {
  return axios.get(`http://localhost:3000/api/user/${username}/info`, { headers });
};

export const loginRequest = (data) => {
  return axios.post('/api/login', data, { headers });
};

export const logoutRequest = () => {
  return axios.get('/api/logout', {
    headers,
    withCredentials: 'include'
  });
};

export const registrationRequest = (data) => {
  return axios.post('/api/registration', data, { headers });
};

export const wishesRequest = (userId) => {
  return axios.get(`http://localhost:3000/api/wishes?user=${userId}`, { headers });
};

export const wishByIdRequest = (id) => {
  return axios.get(`http://localhost:3000/api/wishes/${id}`, { headers });
};

export const wishByUserIdRequest = (userId) => {
  return axios.get(`http://localhost:3000/api/wishes/by-user-id/${userId}`, { headers });
};

export const addWishRequest = (data) => {
  return axios.post('/api/wishes', data, {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data'
  });
};

export const getAllUsers = () => {
  return axios.get('http://localhost:3000/api/user/all', { headers });
};

export const getAllWishes = () => {
  return axios.get('http://localhost:3000/api/wishes/all', { headers });
};
