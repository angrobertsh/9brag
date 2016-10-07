import * as ACTIONS from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

let newState;

const SessionsReducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTIONS.SessionConstants.RECEIVE_CURRENT_USER:
      newState = merge({}, state, {currentUser: action.user});
      return newState;
    case ACTIONS.SessionConstants.RECEIVE_ERRORS:
      newState = merge({}, state, {errors: action.errors});
      return newState;
    case ACTIONS.SessionConstants.LOGOUT:
      newState = merge({}, defaultState);
      return newState;
    case ACTIONS.SessionConstants.RECEIVE_CURRENT_USER_VOTES:
      newState = merge({}, state, {currentUser: {votes: action.votes}});
      return newState;
    default:
      return state;
  }
}

export default SessionsReducer;
