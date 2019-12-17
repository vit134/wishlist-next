import { normalizedWishes, denoralizedWishes } from '../normlize';
import { set, pipe } from 'lodash/fp';
import {
  GET_WISHES_REQUEST,
  GET_WISHES_SUCCESS,
  GET_WISHES_FAIL,

  SET_FILTERED_WISHES,

  ADD_WISH_FETCHING,
  ADD_WISH_SUCCESS,
  ADD_WISH_FAIL,

  DELETE_WISH_FETCHING,
  DELETE_WISH_SUCCESS,
  DELETE_WISH_FAIL,
} from 'domains/root/actions/wishes';

const initialState = {
  isLoading: false,
  status: null,
  error: null,
};

const getWishesEntities = wishes => normalizedWishes({ wishes });

export const wishesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WISHES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_WISHES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        entities: getWishesEntities(payload.data).entities.wishes,
        result: getWishesEntities(payload.data).result.wishes,
      };
    case GET_WISHES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case SET_FILTERED_WISHES:
      return {
        ...state,
        data: payload.data,
      };

    case ADD_WISH_FETCHING:
      return set(['isLoading'], true)(state);
    case ADD_WISH_SUCCESS:
      return pipe([
        set(['isLoading'], false),
        set(['status'], true),
      ])(state);
    case ADD_WISH_FAIL:
      return pipe([
        set(['isLoading'], false),
        set(['status'], false),
        set(['error'], payload.error)
      ])(state);

    case DELETE_WISH_FETCHING:
      return set(['isLoading'], true)(state);
    case DELETE_WISH_SUCCESS:
      const { wishes } = denoralizedWishes(state.entities, state.result);
      const newEntities = wishes.filter(({ _id }) => !payload.data.includes(_id));
      const newData = state.data.filter(({ _id }) => !payload.data.includes(_id));
      const { entities, result } = getWishesEntities(newEntities);

      return pipe([
        set(['isLoading'], false),
        set(['status'], true),
        set(['entities'], entities.wishes),
        set(['result'], result.wishes),
        set(['data'], newData),
      ])(state);
    case DELETE_WISH_FAIL:
      return pipe([
        set(['isLoading'], false),
        set(['status'], false),
        set(['error'], payload.error)
      ])(state);

    default:
      return state;
  }
};
