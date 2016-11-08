import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MemeIndexContainer from '../memes/meme_index_container';
import AuthBarContainer from '../authbar/authbar_container';
import SessionFormContainer from '../session_form/session_form_container';
import UploadFormContainer from '../upload_form/upload_form_container';
import MemeShowContainer from '../memes/meme_show_container';
import UserPageContainer from '../user/user_page_container';
import SplashContainer from '../splash/splash_container';

import App from '../app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._fetchUserData = this._fetchUserData.bind(this);
    this._requestTaggedMemes = this._requestTaggedMemes.bind(this);
    this._requestAllMemes = this._requestAllMemes.bind(this);

    this.routerconst = (
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App }>
          <IndexRoute component={ SplashContainer } />
          <Route path="/memes" component={ MemeIndexContainer } onEnter={ this._requestAllMemes } />;
          <Route path="/tagged/:tags" component={ MemeIndexContainer } onEnter={ this._requestTaggedMemes }/>
          <Route path="/hot" component={ MemeIndexContainer } onEnter={ this._requestAllMemes }/>
          <Route path="/fresh" component={ MemeIndexContainer } onEnter={ this._requestAllMemes }/>
          <Route path="/memes/:memeId" component={ MemeShowContainer } />
          <Route path="/users/:userId" component={ UserPageContainer } onEnter={ this._fetchUserData }/>
          <Route path="/upload" component={ UploadFormContainer } onEnter={ this._ensureLoggedIn } />
          <Route path="/login" component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path="/signup" component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
        </Route>
      </Router>
    )
  }

  _requestTaggedMemes (nextState, replace) {
    // prolly want some sort of clear state here or a different call for inf scroll
    this.props.clearMemes();
    this.props.requestTaggedMemes(nextState.params.tags);
  }

  _requestAllMemes (nextState, replace){
    // prolly want some sort of clear state here or a different call for inf scroll
    this.props.clearMemes();
    this.props.requestAllMemes(nextState.location.pathname);
  }

  _fetchUserData (nextState, replace) {
    this.props.requestUser(parseInt(nextState.params.userId));
  }

  _ensureLoggedIn (nextState, replace) {
    if(!this.props.currentUser){
      replace('/login');
    }
  }

  _redirectIfLoggedIn (nextState, replace) {
    this.props.clearErrors();
    if(this.props.currentUser){
      replace('/memes');
    }
  }

  render() {
    return this.routerconst;
  }
}

export default AppRouter;
