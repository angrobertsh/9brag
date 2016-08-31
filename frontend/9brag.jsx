import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as ACTIONS from './actions/session_actions';
import * as UTILS from './util/session_api_util';
import Root from './components/root';

window.store = configureStore();
window.login = ACTIONS.login;
window.signup = ACTIONS.signup;
window.signout = ACTIONS.logout;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const initialState = {sessions: {currentUser: window.CurrentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
