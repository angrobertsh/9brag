import * as ACTIONS from '../actions/session_actions';
import * as UTILS from '../util/session_api_util';
import {hashHistory} from 'react-router';

let success;

const SessionsMiddleware = ({state, dispatch}) => next => action => {

  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(ACTIONS.receiveErrors(errors));
  };

  switch(action.type){
    case ACTIONS.SessionConstants.LOGIN:
      success = user => dispatch(ACTIONS.receiveCurrentUser(user));
      UTILS.login(action.user, success, errorCB);
      return next(action);
    case ACTIONS.SessionConstants.SIGNUP:
      success = user => dispatch(ACTIONS.receiveCurrentUser(user));
      UTILS.signup(action.user, success, errorCB);
      return next(action);
    case ACTIONS.SessionConstants.LOGIN_GUEST:
      success = user => dispatch(ACTIONS.receiveCurrentUser(user));
      UTILS.loginGuest(success);
      return next(action);
    case ACTIONS.SessionConstants.LOGOUT:
      success = () => {
        next(action);
        hashHistory.push('/memes');
      };
      UTILS.logout(success);
      break;
    default:
      return next(action);
  }
};

export default SessionsMiddleware;
