import { pipe, get, getOr } from 'lodash/fp';
import { selectRoot } from './root';

export const selectUser = pipe([
  selectRoot,
  getOr({}, 'user')
]);

export const selectUserIsLogin = pipe([
  selectUser,
  get(['isLogin'])
]);

export const selectUserIsLoading = pipe([
  selectUser,
  get(['isLoading'])
]);

export const selectUserData = pipe([
  selectUser,
  get(['data'])
]);

export const selectUserError = pipe([
  selectUser,
  get(['error'])
]);
