export const fetchAllMemes = (success) => {
  $.ajax({
    method: "GET",
    url: 'api/memes',
    success,
    error: "Couldn't fetch all memes."
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
