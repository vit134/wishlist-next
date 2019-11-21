import {
  wishesFetching,
  successWishesFetching,
  failWishesFetching,

  userInfoFetching,
  successUserInfoFetching,
  failUserInfoFetching,
} from '../actions';

import { wishByUserIdRequest, userInfoRequst } from '../../../src/requests';

export const getWishes = (userId) => dispatch => {
  dispatch(wishesFetching());

  return wishByUserIdRequest(userId)
    .then(result => dispatch(successWishesFetching(result.data.data)))
    .catch(error => dispatch(failWishesFetching(error)));
};

export const getUserInfo = (userId) => dispatch => {
  dispatch(userInfoFetching());

  return userInfoRequst(userId)
    .then(result => dispatch(successUserInfoFetching(result.data.data)))
    .catch(error => dispatch(failUserInfoFetching(error)));
};
