9Brag

Minimum Viable Product

9Brag is a web application inspired by 9Gag built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

  Hosting on Heroku
  New account creation, login, and guest/demo login
  Post Pictures
  Comment
  Upvote/Downvote
  Tags
  Production README

Implementation and Timeline

Phase 1 (2 days):

Objective: Functioning rails project with front-end Authentication

  New Rails project
  User model/migration
  Back end authentication (session/password)
  StaticPages controller and root view
  Webpack & react/redux modules
  APIUtil to interact with the API
  Redux cycle for frontend authentication
    AuthFormContainer
  User signup/signin components
  Blank landing component after signup/signin
  Style signup/signin components
  Seed users
  Review phase 1

Phase 2: (2 days)

Objective: Complete meme index view (MemeContainerAbbreviated)

  Meme model
  Memes controller [:index, :show, :create]
  Join tables with upvotes and downvotes
  Seed database with a small amount of test data
  Meme components and respective Redux loops
    MemeContainerAbbreviated
      MemeInfoContainer
  Style memes components
  Seed memes
  Review phase 2

Phase 3: (2 days)

Objective: Elaborate upon meme index view with comment container to complete show view (MemeContainerFull)

  Join table for comments
  Comments controller [:create]
  JSON views with tricky if statement for comments like in pokemon project
  Seed database with a small amount of test data
  Comments components and respective Redux loops
    MemeContainerFull
      CommentFormContainer
      CommentContainer
        Comment
  Style comment components
  Seed comments
  Review phase 3

Phase 4: (1 day)

Objective: Add taggings and tagging index

  Tag model and Taggings join table
  Adding tags to memes
  Fetching by tag
  Seed tags with seed data
  Review phase 4

Phase 5: (1 day)

Objective: Have working upload form

  Research uploading images and how to put them in the right place if not our database
  ??? backend?
  Create components and respective redux loops
    UploadFormContainer

Phase 6: (0-1 days)

Objective: Add bonus features including the following:
  Infinite scroll to memes index
    Paginate memes index API to send 20 results at a time
    Append next set of results when user scrolls and is near bottom
    Style scroll components and transitions
    Ensure seed data demonstrates infinite scroll
  Creating a tags index
    Create a request for a tags index of tagname instead of requerying a new memes index
    Create a full page of tagnames that queries a new memes index    
  Search
    Create a request for a tags index instead of requerying a new memes index
    Create a full page for tags that queries a new memes index    
  Creating user profiles
    Create a new
