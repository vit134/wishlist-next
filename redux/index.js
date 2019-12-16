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
import { selectedWishesReducer } from 'domains/profile/reducers';
import { wishReducer } from 'domains/root/reducers/wish';

const composeEnhancers = composeWithDevTools({
  name: 'Wishlist',
});

const root = combineReducers({
  user: userLoginReducer,
  loginPopup: loginPopupReducer,
  addWishPopup: addWishPopupReducer,
  wish: wishReducer,
});

const userPage = combineReducers({
  wishes: wishesReducer,
  userInfo: userInfoReducer,
  filters: filtersReducer,
  pagination: paginationReducer,
});

const profilePage = combineReducers({
  wishes: wishesReducer,
  selectedWishesIds: selectedWishesReducer,
});

const rootReducer = combineReducers({
  userPage,
  profilePage,
  root,
});

export const makeStore = (initialState, options) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)));
};
