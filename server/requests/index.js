const axios = require('axios');

const profanity = text => {
  return axios.get(encodeURI(`https://tt-api.tech/1.0/profanity?txt=${text}&lang=rus`), {
    headers: {
      Authorization: 'Token GU0GRjeab219DbwukcUEbCm7xdXk2aIThEt',
      Accept: 'application/json',
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
};

module.exports = {
  profanity,
};
