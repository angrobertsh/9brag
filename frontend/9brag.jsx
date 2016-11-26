import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as SESSIONACTIONS from './actions/session_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if(window.currentUser) {
    const initialState = {sessions: {currentUser: window.currentUser}};
    store = configureStore(initialState);
    store.dispatch(SESSIONACTIONS.getCurrentUserVotes());
  } else {
    store = configureStore();
  }

  // window.store = store;

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
