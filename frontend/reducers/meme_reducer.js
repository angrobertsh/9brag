import * as ACTIONS from '../actions/meme_actions';
import merge from 'lodash/merge';

const defaultState = {
  errors: [],
  memes: {}
};

let newState;

const MemeReducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTIONS.MemeConstants.RECEIVE_ALL_MEMES:
      newState = merge({}, state, {memes: action.memes});
      return newState;
    case ACTIONS.MemeConstants.RECEIVE_SINGLE_MEME:
      newState = merge({}, state, {memes: action.meme});
      return newState;
    case ACTIONS.MemeConstants.RECEIVE_ERRORS:
      newState = merge({}, state, action.errors);
      return newState;
    case ACTIONS.MemeConstants.RECEIVE_NEW_MEME:
      newState = merge({}, state, {memes: action.meme});
      return newState;
    default:
      return state;
  }
}

export default MemeReducer;
