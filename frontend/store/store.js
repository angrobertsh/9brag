import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middleware/root_middleware';

const configureStore = (preloadedState = {
  sessions: {
    currentUser: null,
    errors: []
  }}) => {
  return createStore(RootReducer, preloadedState, RootMiddleware);
};

export default configureStore;
