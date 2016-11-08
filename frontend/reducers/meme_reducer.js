import * as ACTIONS from '../actions/meme_actions';
import merge from 'lodash/merge';

const defaultState = {
  errors: [],
  memes: {}
};


// Uncomment the lines in json index

const mergeMemeState = (oldState, newState) => {

// receive new meme returns a single object like 12: {memestuff} and that needs to update
// receive all memes returns an array of these

}

const compareTwoMemes = (old, new) => {
  if(Object.keys(old)[0] === Object.keys(new)[0]){
    return true;
  } else {
    return false;
  }
}

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
      newState = merge({}, state, {errors: action.errors});
      return newState;
    case ACTIONS.MemeConstants.RECEIVE_NEW_MEME:
      newState = merge({}, state, {memes: action.meme});
      return newState;
    case ACTIONS.MemeConstants.CLEAR_MEMES:
      newState = merge({}, state, defaultState);
      return newState;
    default:
      return state;
  }
}

export default MemeReducer;
