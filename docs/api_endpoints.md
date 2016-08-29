##API Endpoints

###HTML API

####  Root  
* GET / - loads React web app


###JSON API

####  Users
* POST /api/users
* PATCH /api/users
* (BONUS) GET /api/users/:id

####  Session
* POST /api/session
* DELETE /api/session
* GET /api/session

####  Memes
* GET /api/memes
 * AJAX query will include optional tag param to pass to backend to sort and return correct index
* POST /api/notes
* GET /api/notes/:id
 * Also returns full comments association
 * Also returns upvotes association
 * Also returns downvotes association

####  Upvotes
* POST /api/memes/:id/upvotes
* DESTROY /api/memes/:id/upvotes

####  Downvotes
* POST /api/memes/:id/downvotes
* DESTROY /api/memes/:id/downvotes

####  Comments
* POST /api/memes/:id/comments

####  Tags
* A meme's tags will be included in both the index and show template
* (BONUS) GET /api/tags
