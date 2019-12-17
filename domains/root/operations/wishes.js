import React from 'react';
import { notification } from 'antd';

import { closeAddWishPopup } from '../actions/add-wish-popup';
import {
  addWishFetching,
  addWishSuccess,
  addWishFail,
} from '../actions/wishes';

import { addWishRequest } from '../../../src/requests';

notification.config({
  placement: 'bottomRight',
  duration: 5,
});

export const addWish = userFormData => dispatch => {
  dispatch(addWishFetching());

  return addWishRequest(userFormData)
    .then(({ data }) => {
      if (data.success) {
        dispatch(addWishSuccess(data));
        const { userName, _id } = data.data;
        notification.success({
          message: 'Вишка успешно добавлена',
          description: <>Вы можете перейти на страницу вишки по <a href={`/user/${userName}/${_id}`}>ссылке</a></>,
        });
      } else {
        throw data.error;
      }
      dispatch(closeAddWishPopup());
    })
    .catch(error => {
      dispatch(addWishFail(error));
      notification.error({
        message: 'Что то пошло не так',
        description: error,
      });
    });
};
