###Component Hierarchy

* HomeContainer
 * Navbar
   * TagsAbbreviated
   * VariableButtons    
     * Login/Register _OR_ Logout/Upload
 * Content
   * MemeContainer _OR_ AuthFormContainer _OR_ UploadFormContainer  

* AuthFormContainer
  * AuthForm

* UploadFormContainer
  * UploadForm

* MemeContainer
  * MemeInfo
  * CommentForm
  * CommentsContainer


###Routes

| Path          |  Component           |
|---------------|:--------------------:|
| /sign-up      |  AuthFormContainer   |
| /sign-in      |  AuthFormContainer   |
| /memes/:id    |  MemeContainer       |
| /memes/new    |  UploadFormContainer |
| /tag/:tagname |  MemeContainer       |
