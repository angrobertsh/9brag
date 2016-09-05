export const MemeConstants = {
  REQUEST_ALL_MEMES: "REQUEST_ALL_MEMES",
  REQUEST_SINGLE_MEME: "REQUEST_SINGLE_MEME",
  RECEIVE_ALL_MEMES: "RECEIVE_ALL_MEMES",
  RECEIVE_SINGLE_MEME: "RECEIVE_SINGLE_MEME",
  CREATE_MEME: "CREATE_MEME",
  RECEIVE_NEW_MEME: "RECEIVE_NEW_MEME",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  CREATE_COMMENT: "CREATE_COMMENT",
  UPVOTE: "UPVOTE"
};

export const requestAllMemes = () => {
  return {
    type: MemeConstants.REQUEST_ALL_MEMES
  };
};

export const requestSingleMeme = (id) => {
  return {
    type: MemeConstants.REQUEST_SINGLE_MEME,
    id: id
  };
};

export const receiveAllMemes = (memes) => {
  return {
    type: MemeConstants.RECEIVE_ALL_MEMES,
    memes: memes
  };
};

export const receiveSingleMeme = (meme) => {
  return {
    type: MemeConstants.RECEIVE_SINGLE_MEME,
    meme: meme
  };
};

export const createMeme = (meme) => {
  return {
    type: MemeConstants.CREATE_MEME,
    meme: meme
  };
};

export const receiveNewMeme = (meme) => {
  return {
    type: MemeConstants.RECEIVE_NEW_MEME,
    meme: meme
  };
};

export const receiveErrors = (errors) => {
  return {
    type: MemeConstants.RECEIVE_ERRORS,
    errors: errors
  };
};

export const createComment = (comment, memeId) => {
  return {
    type: MemeConstants.CREATE_COMMENT,
    comment: comment,
    memeId: memeId
  };
};

export const upvote = (vote, memeId) => {
  return {
    type: MemeConstants.UPVOTE,
    vote: vote,
    memeId: memeId
  };
};
