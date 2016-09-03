import { hashHistory } from 'react-router';
import * as ACTIONS from '../actions/meme_actions';
import * as UTILS from '../util/meme_api_util';

let success;

const MemeMiddleware = ({state, dispatch}) => next => action => {

  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(ACTIONS.receiveErrors(errors));
  };

  switch(action.type){
    case ACTIONS.MemeConstants.REQUEST_ALL_MEMES:
      success = memes => dispatch(ACTIONS.receiveAllMemes(memes));
      UTILS.fetchAllMemes(success);
      return next(action);
    case ACTIONS.MemeConstants.REQUEST_SINGLE_MEME:
      success = meme => dispatch(ACTIONS.receiveSingleMeme(meme));
      UTILS.fetchSingleMeme(action.id, success);
      return next(action);
    case ACTIONS.MemeConstants.CREATE_COMMENT:
      success = meme => dispatch(ACTIONS.receiveSingleMeme(meme));
      UTILS.createComment(action.comment, success, action.memeId);
      return next(action);
    case ACTIONS.MemeConstants.CREATE_MEME:
      success = meme => {
        dispatch(ACTIONS.receiveNewMeme(meme));
        hashHistory.push(`memes/${meme.id}`);
      };
      UTILS.postMeme(action.meme, success, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default MemeMiddleware;
