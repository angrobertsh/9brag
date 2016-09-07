export const UserConstants = {
  REQUEST_USER: "REQUEST_USER",
  RECEIVE_USER: "RECEIVE_USER",
  DISPLAY_ERROR: "DISPLAY_ERROR",
  UPDATE_USER: "UPDATE_USER"
};

export const requestUser = (id) => {
  return {
    type: UserConstants.REQUEST_USER,
    id: id};
};

export const receiveUser = (user) => {
  return {
    type: UserConstants.RECEIVE_USER,
    user: user};
};

export const displayError = () => {
  return {
    type: UserConstants.DISPLAY_ERROR
  };
};

export const updateUser = (user) => {
  return {
    type: UserConstants.UPDATE_USER,
    user: user
  }
}
