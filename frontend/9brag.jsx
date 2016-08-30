import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as ACTIONS from './actions/session_actions';
import * as UTILS from './util/session_api_util';

window.store = configureStore();
window.login = ACTIONS.login;
window.signup = ACTIONS.signup;
window.signout = ACTIONS.logout;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<div>hihi!</div>, root);
});
