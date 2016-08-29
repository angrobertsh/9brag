###Component Hierarchy

* HomeContainer
 * Navbar
  * Logo
  * TagsAbbreviated
  * VariableButtons    
   * Login/Register _OR_
   * Logout/Upload
* Content
 * MemeContainerAbbreviated _OR_
 * MemeContainerFull _OR_
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

* MemeContainerAbbreviated
 * Title
 * ImageContainer
  * Image
 * MemeInfoContainer
  * VoteInfo
  * UpvoteButton
  * DownvoteButton
  * Tags
  * NumComments

* MemeContainerFull
 * Title
 * ImageContainer
  * Image
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
  * UserImage
  * Body


###Routes

####Path                    ####Component

/sign-up                AuthFormContainer
/sign-in                AuthFormContainer
/memes                  MemeContainerAbbreviated
/memes/:id              MemeContainerFull  
/memes/new              UploadFormContainer
/tag/:tagname           MemeContainerAbbreviated
