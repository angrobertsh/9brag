##9Brag

[9brag live] (www.google.com)

9Brag is a full stack web application that embraces the futility and frivolousness of the internet era as represented by internet memes and karma. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

###Features and Implementation

####Single-Page App

9Brag uses React and Redux to make AJAX calls to dynamically render the stalest, most beloved memes and their trashy comments. Navigation occurs without multiple full http requests and content is queried and populated smooth rendering, thanks to React.

####Authentication

User authentication happens on the frontend framework using calls to SessionStore to populate a current user. Sensitive information is kept out of the frontend of the app by making an API call to SessionsController#get_user.

####Picture Submission and Storage

On the database side, memes are stored in one table in the database, which contains columns for id, url and descriptions. Upon login, an API call is made to the database which queries, currently, the most popular memes as sorted by upvotes.

Pictures can be submitted and stored on a third party website. Memes are rendered in two different components: the MemeContainerAbbreviated component, which shows the title, image, upvotes, tags, and number of comments, and the MemeContainerFull component, which shows expended information including comments and a comment submission form. On click, memes transform from MemeContainerAbbreviated to MemeContainerFull.

####Upvote and Tag Join Tables

The database is also populated with multiple join tables describing the relationship between users, tags, and memes. ActiveRecord associations create the tags relationship between tag names and memes, the upvotes/downvotes relationship between memes and users, and the user comments relationship through users, memes, and their comments.

###Future Directions for the Project

Future directions for this project include elaborating upon the idea of more karma being better and worth more, more irritating bells and whistles, unnecessary monetization, and an infinite scroll on the memes index.
