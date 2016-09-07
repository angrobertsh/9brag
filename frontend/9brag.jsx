import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as ACTIONS from './actions/meme_actions';
import * as ACTIONS2 from './actions/user_actions';
import * as UTILS from './util/meme_api_util';
import Root from './components/root';

window.requestAllMemes = ACTIONS.requestAllMemes;
window.requestSingleMeme = ACTIONS.requestSingleMeme;
window.createMeme = ACTIONS.createMeme;
window.requestUser = ACTIONS2.requestUser;

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if(window.currentUser) {
    const initialState = {sessions: {currentUser: window.currentUser}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  window.store = store;

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
