export const signup = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/users',
    data: user,
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/session',
    data: user,
    success,
    error
  });
};

export const logout = (success) => {
  $.ajax({
    method: "DELETE",
    url: 'api/session',
    success,
    error: () => alert('error')
  });
};

export const loginGuest = (success) => {
  $.ajax({
    method: "POST",
    url: 'api/session',
    data: {user: {name: "Guest", password: "lololxd"}},
    success,
    error: () => alert('Already logged in!')
  });
};

export const getCurrentUserVotes = (success) => {
  $.ajax({
    url: 'api/currentUserVotes',
    success,
    error: () => alert('error')
  });
};
