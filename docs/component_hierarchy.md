###Component Hierarchy

<!-- needs to be component if it has state and if it dispatches actions/does actions
click in login register and upload go to different routes
filter components
instead of abbreviated it means the entire index
index container index pokemon index item
item info -->


* HomeContainer
 * Navbar
  * TagsAbbreviated
  * VariableButtons    
   * Login/Register _OR_
   * Logout/Upload
 * Content
  * MemeContainerAbbreviated _OR_
  * AuthFormContainer _OR_
  * UploadFormContainer

* AuthFormContainer
 * AuthForm
  * UsernameBox
  * PasswordBox
  * Submit

* UploadFormContainer
 * UploadForm
  * ImageBox
  * TitleBox
  * NSFWBox
  * TagsBox
  * Submit

* MemeContainerFull
 * MemeInfoContainer
  * VoteInfo
  * UpvoteButton
  * DownvoteButton
  * Tags
  * NumComments
 * CommentFormContainer
  * Body
  * Submit
 * CommentContainer
  * Comment
  * Body


###Routes

####Path                    ####Component

/sign-up                AuthFormContainer
/sign-in                AuthFormContainer
/memes                  MemeContainerAbbreviated
/memes/:id              MemeContainerFull  
/memes/new              UploadFormContainer
/tag/:tagname           MemeContainerAbbreviated
