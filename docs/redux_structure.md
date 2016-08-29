Auth Cycles

  Session API Request Actions

    signUp
      1. Invoked from SignupForm onSubmit
      2. POST /api/users is called.
      3. receiveCurrentUser is set as the success callback.

    logIn
      1. invoked from SigninForm onSubmit
      2. POST /api/session is called.
      3. receiveCurrentUser is set as the callback.

    logOut
      1. invoked from Navbar onClick
      2. DELETE /api/session is called.
      3. removeCurrentUser is set as the success callback.

    fetchCurrentUser
      1. invoked from App in didMount
      2. GET /api/session is called.
      3. receiveCurrentUser is set as the success callback.

  Session API Response Actions

    receiveCurrentUser
      1. Invoked from an API callback
      2. The SessionReducer stores currentUser in the application's state.

    removeCurrentUser
      1. Invoked from an API callback
      2. The SessionReducer removes currentUser from the application's state.

Error Cycles

  Error API Response Actions

    setErrors
      1. Invoked from API callbacks on error for actions that generate POST requests
      2. The ErrorReducer stores the form in the application's state; errors are mapped to their respective forms

    removeErrors
      1. Invoked from API callbacks on success for actions that generate POST requests
      2. The ErrorReducer removes errors for a given form in the application's state.


Meme Cycles

  Meme API Request Actions

    fetchAllMemes
      1. Invoked from MemesIndex/root didMount/willReceiveProps
      2. GET /api/memes is called.
      3. receiveAllMemes is set as the success callback.

    createMeme
      1. Invoked from meme form onSubmit
      2. POST /api/memes is called.
      3. receiveSingleMeme is set as the success callback.

    fetchSingleMeme
      1. Invoked from meme onClick event.
      2. GET /api/memes/:id is called.
      3. receiveSingleMeme is set as the success callback.

  Meme API Response Actions

    receiveAllMemes
      1. Invoked from an API callback.
      2. The MemeReducer updates the memes in the application's state.

    receiveSingleMeme
      1. Invoked from an API callback.
      2. The MemeReducer updates the currentMeme in the application's state.

Comment Cycles

  Comment API Request Actions

    requestAllComments
      1. invoked from api/memes/:id onEnter event.
      2. GET /api/memes/:id/comments is called.
      3. receiveAllComments is set as the success callback.

    createComment
      1. Invoked from comment form onSubmit
      2. POST /api/memes/:id/comments is called.
      3. receiveSingleComment is set as the success callback.

  Comment API Response Actions

    receiveAllComments
      1. Invoked from an API callback.
      2. the CommentReducer updates the comments in the application's state.

    receiveSingleComment
      1. Invoked from an API callback.
      2. The CommentReducer updates the comments in the application's state.

Upvote/Downvote Cycles

  Upvote/Downvote API Request Actions

    createUpvote/createDownvote
      1. invoked from upvote onClick event when not already pushed.
      2. GET /api/memes/:id/upvote (or/downvote) is called.
      3. receiveUpvoteCreate (or receiveDownvoteCreate) is set as the success callback.

    destroyUpvote/destroyDownvote
      1. Invoked from comment form onSubmit
      2. POST /api/memes/:id/comments is called.
      3. receiveUpvoteDestroy (or receiveDownvoteDestroy) is set as the success callback.

  Upvote/Downvote API Response Actions

    receiveUpvoteDestroy/receiveDownvoteDestroy
      1. Invoked from an API callback.
      2. The UpvoteReducer/DownvoteReducer updates the meme in the application's state.

    receiveDownvoteCreate/receiveDowvoteCreate
      1. Invoked from an API callback.
      2. The UpvoteReducer/DownvoteReducer updates the meme in the application's state.

Tag Cycles

  Tag API Request Actions

    requestAllTags
      1. invoked from tag onClick event.
      2. GET /api/tag/:tagname/ is called.
      3. receiveAllMemes is set as the success callback.
