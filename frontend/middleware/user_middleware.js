import * as ACTIONS from '../actions/user_actions';
import * as UTILS from '../util/user_api_util';
import {hashHistory} from 'react-router';

let success;
let errorCB;

const UserMiddleware = ({state, dispatch}) => next => action => {
  switch(action.type){
    case ACTIONS.UserConstants.UPDATE_USER:
      success = user => dispatch(ACTIONS.receiveUser(user));
      UTILS.updateUser(action.user, success);
      return next(action);
    case ACTIONS.UserConstants.REQUEST_USER:
      success = user => dispatch(ACTIONS.receiveUser(user));
      errorCB = () => dispatch(ACTIONS.displayError())
      UTILS.fetchSingleUser(action.id, success, errorCB);
      return next(action);
    default:
      return next(action);
  }

};

export default UserMiddleware;
