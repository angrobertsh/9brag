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

  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ AuthBarContainer } />
            <Route path="/login" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn.bind(this)} />
            <Route path="/signup" component={ SessionFormContainer } onEnter={this._redirectIfLoggedIn.bind(this)} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
