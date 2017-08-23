import { hashHistory } from 'react-router';
import * as ACTIONS from '../actions/meme_actions';
import * as SESSION_ACTIONS from '../actions/session_actions';
import * as UTILS from '../util/meme_api_util';

let success;

const MemeMiddleware = ({state, dispatch}) => next => action => {

  const errorCB = errors => {
    dispatch(ACTIONS.receiveErrors(errors.responseJSON.errors));
  };

  switch(action.type){
    case ACTIONS.MemeConstants.REQUEST_ALL_MEMES:
      success = memes => dispatch(ACTIONS.receiveAllMemes(memes));
      UTILS.fetchAllMemes(action.sort, action.lastMeme, success);
      return next(action);
    case ACTIONS.MemeConstants.REQUEST_TAGGED_MEMES:
      success = memes => dispatch(ACTIONS.receiveAllMemes(memes));
      UTILS.fetchTaggedMemes(action.tags, action.lastMeme, success);
      return next(action);
    case ACTIONS.MemeConstants.REQUEST_SINGLE_MEME:
      success = meme => dispatch(ACTIONS.receiveSingleMeme(meme));
      UTILS.fetchSingleMeme(action.id, success);
      return next(action);
    case ACTIONS.MemeConstants.REQUEST_USER_MEMES:
      success = memes => dispatch(ACTIONS.receiveAllMemes(memes));
      UTILS.fetchUserMemes(action.id, success);
      return next(action);
    case ACTIONS.MemeConstants.CREATE_COMMENT:
      success = meme => dispatch(ACTIONS.receiveSingleMeme(meme));
      UTILS.createComment(action.comment, success, action.memeId);
      return next(action);
    case ACTIONS.MemeConstants.CREATE_MEME:
      success = meme => {
        dispatch(ACTIONS.receiveNewMeme(meme));
        hashHistory.push(`images/${Object.keys(meme[0])[0]}`);
      };
      UTILS.postMeme(action.meme, success, errorCB);
      return next(action);
    case ACTIONS.MemeConstants.UPVOTE:
      success = (meme) => {
        dispatch(ACTIONS.receiveSingleMeme(meme));
        dispatch(SESSION_ACTIONS.getCurrentUserVotes());
      };
      UTILS.createVote(action.vote, success, action.memeId);
      return next(action);
    default:
      return next(action);
  }
};

export default MemeMiddleware;
