{
  currentUser: {
    id: 1,
    name: "Robert"
  },

  currentTag: [],

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createMeme: {errors: ["body can't be blank"]}
  },

  currentMeme: {
    1: {
      title: "Cat meme",
      url: "www.cat.com/cat1.jpg",
      nsfw: false,
      attribution: "www.cat.com"
      upvotes: 9000
      downvotes: 1
      comment_count: 3,
      comments: {
        1: {
          user_id: 3,
          meme_id: 1,
          body: "Dis cat is da bomb"
        }
        2: {
          user_id: 4,
          meme_id: 1,
          body: "Agreed"
        }
        3: {
          user_id: 4,
          meme_id: 1,
          body: "I just made hecka money using www.ijustmadeheckamoney.horse!"
        }
      }
      tags: {
        1: {
          tagname: "cat"
        }
        2: {
          tagname: "cute"
        }
      }
    }  
  }

  memes: {
    1: {
      title: "Cat meme",
      url: "www.cat.com/cat1.jpg",
      nsfw: false,
      attribution: "www.cat.com"
      upvotes: 9000
      downvotes: 1
      comment_count: 3
      tags: {
        1: {
          tagname: "cat"
        }
        2: {
          tagname: "cute"
        }
      }
    }
    2: {
      title: "Cat meme2",
      url: "www.cat.com/cat2.jpg",
      nsfw: false,
      attribution: "www.cat.com"
      upvotes: 90
      downvotes: 11
      comment_count: 2
      tags: {
        1: {
          tagname: "cat"
        }
      }
    }
    3: {
      title: "Dog meme",
      url: "www.dog.com/cat.jpg",
      nsfw: false,
      attribution: ""
      upvotes: 0
      downvotes: -110
      comments: 3
      tags: {
      }
    }
  }  
}
