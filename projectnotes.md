Old router file. Maybe keep this?

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from '../app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this.ensureLoggedIn = this.ensureLoggedIn.bind(this);
    this.redirectIfLoggedin = this.redirectIfLoggedIn.bind(this);
  }

  ensureLoggedIn (nextState, replace) {
    if(this.props.currentUser){
      return;
    } else {
      replace('/login');
    }
  }

  redirectIfLoggedIn (nextState) {
    if(this.props.currentUser){
      replace('/');
    }
  }

  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
        //          <IndexRoute component={ MemeContainer } />
        //          Meme container also includes the navbar which will include the Authform
        //          <Route path="/login" component={ AuthFormContainer } onEnter={this.redirectIfLoggedIn} />
        //          <Route path="/signup" component={ AuthFormContainer } onEnter={this.redirectIfLoggedIn} />
        //          <Route path="/memes/new" component={ MemeFormContainer } onEnter={this.ensureLoggedIn} />
        //          <Route path="/memes/:memeId" component={ MemeShowContainer }>
        //              <Route path="comments" component={ CommentFormContainer } onEnter={this.ensureLoggedIn} />
        //          </Route>
        //          Extra hella bonus <Route path="users/userId" component={ UserShowContainer } />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;


2 warnings after auth -

1. Warning: [react-router] You cannot change <Router routes>; it will be ignored *after creating session_form, possibly by the redirect* *this is because the first render checks for current user and tries to do something with the render? move something to constructor? 9/1*
2. Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `SessionForm`. *after having guest login and creating session form*. *changed this to a button without a value and it worked 9/1*




what is this tags_id method?
how to organize?

how to route based on id

ensureloggedin and redirectifloggedin are working but they aren't redirecting on logout

how to test show


import React from 'react';
import { Link, withRouter } from 'react-router';

class UploadForm extends React.Component{

  constructor(props) {
    super(props);
    // this.upload = this.upload.bind(this);
  }


  // upload (e) {
  //   e.preventDefault();
  //   cloudinary.openUploadWidget(
  //     window.cloudinary_options,
  //     (error, images) => {
  //       if(error === null) {
  //         //success
  //         //i should open the form with the other info
  //         //createMeme with images[0].url is the url
  //       } else {
  //         //failure
  //
  //       }
  //     }
  //   );
  // }

  render() {
    return <div>This is where the form will happen</div>;
// (<button className="uploadformbutton" onClick={this.upload}>Upload Image</button>)
  }

}

export default withRouter(UploadForm);


#AEA5A0 accent, on hover, buttons

no yellow
basic colors as background of site - primary colors
accent colors! - readable, tell people where to click - try and avoid red
