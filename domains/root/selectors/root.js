import { getOr } from 'lodash/fp';

export const selectRoot = getOr({}, 'root');
