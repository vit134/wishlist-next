export const SELECT_WISH = 'SELECT_WISH';
export const SELECT_ALL_WISH = 'SELECT_ALL_WISH';

export const selectWish = ids => ({
  type: SELECT_WISH,
  payload: { ids },
});

export const selectAllWish = ids => ({
  type: SELECT_ALL_WISH,
  payload: { ids },
});