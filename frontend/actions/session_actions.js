export const SessionConstants = {
  SIGNUP: "SIGNUP",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  LOGIN_GUEST: "LOGIN_GUEST",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  RECEIVE_CURRENT_USER_VOTES: "RECEIVE_CURRENT_USER_VOTES",
  GET_CURRENT_USER_VOTES: "GET_CURRENET_USER_VOTES",
  CLEAR_ERRORS: "CLEAR_ERRORS"
};

export const signup = (user) => {
  return {
    type: SessionConstants.SIGNUP,
    user: user};
};

export const login = (user) => {
  return {
    type: SessionConstants.LOGIN,
    user: user};
};

export const logout = () => {
  return {
    type: SessionConstants.LOGOUT};
};

export const loginGuest = () => {
  return {
    type: SessionConstants.LOGIN_GUEST};
};

export const receiveCurrentUser = (user) => {
  return {
    type: SessionConstants.RECEIVE_CURRENT_USER,
    user: user};
};

export const receiveErrors = (errors) => {
  return {
    type: SessionConstants.RECEIVE_ERRORS,
    errors: errors};
};

export const getCurrentUserVotes = () => {
  return {
    type: SessionConstants.GET_CURRENT_USER_VOTES};
};

export const receiveCurrentUserVotes = (votes) => {
  return {
    type: SessionConstants.RECEIVE_CURRENT_USER_VOTES,
    votes: votes};
};

export const clearErrors = () => {
  return {
    type: SessionConstants.CLEAR_ERRORS};
};
