Component Hierarchy

HomeContainer
  Navbar
    Logo
    TagsAbbreviated
    VariableButtons    
      Login/Register
      OR
      Logout/Upload
  Content
    MemeContainerAbbreviated
    OR
    MemeContainerFull
    OR
    AuthFormContainer
    OR
    UploadFormContainer

AuthFormContainer
  AuthForm
    UsernameBox
    PasswordBox
    Submit

UploadFormContainer
  UploadForm
    ImageBox
    TitleBox
    NSFWBox
    TagsBox
    Submit

MemeContainerAbbreviated
  Title
  ImageContainer
    Image
  MemeInfoContainer
    VoteInfo
    UpvoteButton
    DownvoteButton
    Tags
    NumComments

MemeContainerFull
  Title
  ImageContainer
    Image
  MemeInfoContainer
    VoteInfo
    UpvoteButton
    DownvoteButton
    Tags
    NumComments
  CommentFormContainer
    Body
    Submit
  CommentContainer
    Comment
      UserImage
      Body


Routes

Path                    Component

/sign-up                AuthFormContainer
/sign-in                AuthFormContainer
/memes                  MemeContainerAbbreviated
/memes/:id              MemeContainerFull  
/memes/new              UploadFormContainer
/tag/:tagname           MemeContainerAbbreviated
