export const fetchSingleUser = (id, success, error) => {
  $.ajax({
    method: "GET",
    url: `api/users/${id}`,
    success,
    error
  });
};

export const updateUser = (user, success) => {
  $.ajax({
    method: "PATCH",
    url: `api/updatephoto`,
    data: {user: user},
    success,
    error: () => alert("Unable to update user")
  });
}
