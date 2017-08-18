import * as ACTIONS from '../actions/user_actions';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

const defaultState = {};

let newState;

const UserReducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTIONS.UserConstants.RECEIVE_USER:
      newState = merge({}, state, action.user);
      return newState;
    case ACTIONS.UserConstants.DISPLAY_ERROR:
      alert("Unknown user.");
      hashHistory.push('/images');
      return state;
    default:
      return state;
  }
}

export default UserReducer;
