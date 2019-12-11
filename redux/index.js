import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  wishesReducer,
  userInfoReducer,
  filtersReducer,
  paginationReducer,
} from 'domains/user-by-id/reducers';
import { userLoginReducer } from 'domains/root/reducers/user';
import { loginPopupReducer } from 'domains/root/reducers/login-popup';
import { addWishPopupReducer } from 'domains/root/reducers/add-wish-popup';
import { wishReducer } from 'domains/root/reducers/wish';

const composeEnhancers = composeWithDevTools({
  name: 'Wishlist',
});

const userPage = combineReducers({
  wishes: wishesReducer,
  userInfo: userInfoReducer,
  filters: filtersReducer,
  pagination: paginationReducer,
});

const root = combineReducers({
  user: userLoginReducer,
  loginPopup: loginPopupReducer,
  addWishPopup: addWishPopupReducer,
  wish: wishReducer,
});

const rootReducer = combineReducers({
  userPage,
  root,
});

export const makeStore = (initialState, options) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)));
};
