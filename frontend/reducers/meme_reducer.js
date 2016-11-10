import * as ACTIONS from '../actions/meme_actions';
import merge from 'lodash/merge';

const defaultState = {
  errors: [],
  memes: []
};

const mergeMemeState = (oldState, newInfo) => {

// receive new meme returns a single object like 12: {memestuff} and that needs to update
// receive all memes returns an array of these

  let newState = merge({}, oldState);

  Object.keys(newInfo).forEach((updateKey) => {
    newState[updateKey] = mergeArr(newState[updateKey], newInfo[updateKey]);
  });
  return newState;
};

const mergeArr = (oldState, newInfo) => {
  let mergedArr = cloneArr(oldState);
  let dupIdx;

  newInfo.forEach((el, idx) => {
    dupIdx = customInclude(oldState, el);
    if(dupIdx > -1){
      mergedArr[dupIdx] = el;
    } else {
      mergedArr.push(el);
    }
  });

  return mergedArr;
}

const customInclude = (arr, item) => {
  let returnIdx = -1
  arr.forEach((el, idx) => {
    if(Object.keys(el)[0] === Object.keys(item)[0]){
      returnIdx = idx;
    }
  });
  return returnIdx;
};

const cloneArr = (arr) => {
  let clone = [];
  arr.forEach((el) => {
    clone.push(JSON.parse(JSON.stringify(el)));
  });
  return clone;
};

let newState;

const MemeReducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTIONS.MemeConstants.RECEIVE_ALL_MEMES:
      newState = mergeMemeState(state, {memes: action.memes});
      return newState;
    case ACTIONS.MemeConstants.RECEIVE_SINGLE_MEME:
      newState = mergeMemeState(state, {memes: [action.meme]});
      return newState;
    case ACTIONS.MemeConstants.RECEIVE_ERRORS:
      newState = mergeMemeState(state, {errors: action.errors});
      return newState;
    case ACTIONS.MemeConstants.RECEIVE_NEW_MEME:
      newState = mergeMemeState(state, {memes: action.meme});
      return newState;
    case ACTIONS.MemeConstants.CLEAR_MEMES:
      newState = merge({}, defaultState);
      return newState;
    default:
      return state;
  }
};

// let newState;
//
// const MemeReducer = (state = defaultState, action) => {
//   switch(action.type){
//     case ACTIONS.MemeConstants.RECEIVE_ALL_MEMES:
//       newState = merge({}, state, {memes: action.memes});
//       return newState;
//     case ACTIONS.MemeConstants.RECEIVE_SINGLE_MEME:
//       newState = merge({}, state, {memes: [action.meme]});
//       return newState;
//     case ACTIONS.MemeConstants.RECEIVE_ERRORS:
//       newState = merge({}, state, {errors: action.errors});
//       return newState;
//     case ACTIONS.MemeConstants.RECEIVE_NEW_MEME:
//       newState = merge({}, state, {memes: action.meme});
//       return newState;
//     case ACTIONS.MemeConstants.CLEAR_MEMES:
//       newState = merge({}, defaultState);
//       return newState;
//     default:
//       return state;
//   }
// };

export default MemeReducer;
