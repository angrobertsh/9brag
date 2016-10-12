export const fetchAllMemes = (success) => {
  $.ajax({
    method: "GET",
    url: 'api/memes',
    success,
    error: "Couldn't fetch all memes."
  });
};

// export const fetchHotMemes = (success) => {
//   $.ajax({
//     method: "GET",
//     url: 'api/getHotMemes',
//     success,
//     error: "Couldn't fetch all hot memes."
//   });
// };
//
// export const fetchFreshMemes = (success) => {
//   $.ajax({
//     method: "GET",
//     url: 'api/getFreshMemes',
//     success,
//     error: "Couldn't fetch all fresh memes."
//   });
// };
//
// export const fetchTaggedMemes = (tag, success) => {
//   $.ajax({
//     method: "GET",
//     url: `api/${tag}`,
//     success,
//     error: "Couldn't fetch all tagged memes."
//   });
// };

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
    error: () => {alert("Please log in to upvote memes.")}
  });
};
