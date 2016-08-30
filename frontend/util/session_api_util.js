export const signup = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/users',
    data: {user: user},
    success,
    error
  });
};

export const login = (user, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/session',
    data: {user: user},
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
