import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AuthBarContainer from '../authbar/authbar_container';
import SessionFormContainer from '../session_form/session_form_container';

import App from '../app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
  }

  _ensureLoggedIn (nextState, replace) {
    if(this.props.currentUser){
      return;
    } else {
      replace('/login');
    }
  }

  _redirectIfLoggedIn (nextState) {
    if(this.props.currentUser){
      replace('/');
    }
    return;
  }

  // on enter hook for app request all memes
  // on enter hook for show 1 meme requests 1 meme

    //indexroute is splash/landing
  //  <IndexRoute component={ AuthBarContainer } />

  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>

          //  this is where show 1 meme component/route will be
          <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn.bind(this)} />
          <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn.bind(this)} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
