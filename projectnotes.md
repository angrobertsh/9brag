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

1. Warning: [react-router] You cannot change <Router routes>; it will be ignored *after creating session_form, possibly by the redirect*
2. Warning: Failed form propType: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Check the render method of `SessionForm`. *after having guest login and creating session form*

handleSubmit(e){
  e.preventDefault();
  const formType = this.props.location.pathname.slice(1)
  const processForm = (formType === 'login') ? this.props.login : this.props.signup;
  const user = this.state;
  processForm({user});
}

componentDidUpdate() {
  if(this.props.loggedIn){
    this.props.router.push('/');
  }
}

this.renderErrors.bind(this)()
