import {
  wishesFetching,
  successWishesFetching,
  failWishesFetching,
  deleteWishFetching,
  deleteWishSuccess,
  deleteWishFail,
  setWishes,
} from 'domains/root/actions/wishes';
import { selectWish } from 'domains/profile/actions/';
import { notification } from 'antd';

import { wishByUserIdRequest, deleteWishesRequest } from '../../../src/requests';

notification.config({
  placement: 'bottomRight',
  duration: 5,
});

export const getWishes = userId => dispatch => {
  dispatch(wishesFetching());

  return wishByUserIdRequest(userId)
    .then(result => {
      const { data } = result.data;
      dispatch(successWishesFetching(data));
      dispatch(setWishes(data));
    })
    .catch(error => dispatch(failWishesFetching(error)));
};

export const deleteWishes = ids => dispatch => {
  dispatch(deleteWishFetching());

  return deleteWishesRequest(ids)
    .then(({ data }) => {
      if (data.success) {
        dispatch(deleteWishSuccess(data));
        dispatch(selectWish([]));

        notification.success({
          message: 'Удаление прошло успешно',
        });
      } else {
        throw data.error;
      }
    })
    .catch(err => {
      dispatch(deleteWishFail(err));

      notification.error({
        message: 'Что то пошло не так',
        description: err,
      });
    });
};
