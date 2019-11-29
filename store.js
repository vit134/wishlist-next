import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { wishesReducer, userInfoReducer } from 'domains/user-by-id/reducers';

const initialState = {};

const composeEnhancers = composeWithDevTools({
  name: 'USER/:id',
});

const reducer = combineReducers({
  wishes: wishesReducer,
  userInfo: userInfoReducer,
});

export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware())
  );
};
