import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { wishesReducer, userInfoReducer } from '../domains/user-by-id/reducers';

const composeEnhancers = composeWithDevTools({
  name: 'USER/:id'
});

const userPage = combineReducers({
  wishes: wishesReducer,
  userInfo: userInfoReducer
});

const rootReducer = combineReducers({
  userPage
});

export const makeStore = (initialState, options) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)));
};
