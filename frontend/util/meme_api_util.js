export const fetchAllMemes = (sort, lastMeme, success) => {
  $.ajax({
    method: "GET",
    url: 'api/memes',
    data: {sort: sort, lastMeme: lastMeme},
    success,
    error: "Couldn't fetch all memes."
  });
};

export const fetchTaggedMemes = (tag, lastMeme, success) => {
  $.ajax({
    method: "GET",
    url: `api/getTaggedMemes/${tag}`,
    data: {lastMeme: lastMeme},
    success,
    error: "Couldn't fetch all tagged memes."
  });
};

export const fetchUserMemes = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/getUserMemes/${id}`,
    success,
    error: "Couldn't fetch user's memes."
  });
};

export const fetchSingleMeme = (id, success) => {
  $.ajax({
    method: "GET",
    url: `api/memes/${id}`,
    success,
    error: "Unable to fetch meme."
  });
};

export const postMeme = (meme, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/memes',
    data: {meme: meme},
    success,
    error
  });
};

export const createComment = (comment, success, memeid) => {
  $.ajax({
    method: "POST",
    url: `api/memes/${memeid}/comments`,
    data: comment,
    success,
    error: "Unable to fetch comment."
  });
};

export const createVote = (vote, success, memeid) => {
  $.ajax({
    method: "POST",
    url: `api/memes/${memeid}/votes`,
    data: vote,
    success,
    error: () => {alert("Please log in to upvote photos.")}
  });
};
