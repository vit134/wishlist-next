import { pipe, get } from 'lodash/fp';
import { selectRoot } from './root';

export const selectUser = pipe([
  selectRoot,
  get('user')
]);

export const selectUserIsLogin = pipe([
  selectUser,
  get(['isLogin'])
]);

export const selectUserData = pipe([
  selectUser,
  get(['data'])
]);
