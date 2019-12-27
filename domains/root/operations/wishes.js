import React from 'react';
import { values, compose } from 'lodash/fp';
import { getFiltersFuctions } from 'helpers';
import { notification } from 'antd';

import { closeAddWishPopup } from 'domains/root/actions/add-wish-popup';
import { selectWishesEntities } from 'domains/root/selectors/wishes';
import {
  addWishFetching,
  addWishSuccess,
  addWishFail,

  setWishes,
} from 'domains/root/actions/wishes';

import { addWishRequest } from 'requests';

notification.config({
  placement: 'bottomLeft',
  duration: 3,
});

export const applyWishesWithFilters = filters => (dispatch, getState) => {
  const state = getState();
  const data = values(selectWishesEntities(state));
  const filtering = getFiltersFuctions(filters);

  // const withFilters = filtering(data);

  // dispatch(setWishes(withFilters));
  compose([dispatch, setWishes, filtering])(data);
};

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
      });
      console.warn(error);
    });
};
