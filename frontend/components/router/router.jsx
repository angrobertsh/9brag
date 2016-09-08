import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MemeIndexContainer from '../memes/meme_index_container';
import AuthBarContainer from '../authbar/authbar_container';
import SessionFormContainer from '../session_form/session_form_container';
import UploadFormContainer from '../upload_form/upload_form_container';
import MemeShowContainer from '../memes/meme_show_container';
import UserPageContainer from '../user/user_page_container';

import App from '../app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._fetchUserData = this._fetchUserData.bind(this);
    this.routerconst = (
      <Router history={ hashHistory } onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={ App } onEnter={ this.props.requestAllMemes }>
          <IndexRoute component={ MemeIndexContainer } />;
          <Route path="/tagged/:tags" component={ MemeIndexContainer } onEnter={ this.props.requestAllMemes }/>
          <Route path="/hot" component={ MemeIndexContainer } onEnter={ this.props.requestAllMemes }/>
          <Route path="/fresh" component={ MemeIndexContainer } onEnter={ this.props.requestAllMemes }/>
          <Route path="/memes/:memeId" component={ MemeShowContainer } />
          <Route path="/users/:userId" component={ UserPageContainer } onEnter={ this._fetchUserData }/>
          <Route path="/upload" component={ UploadFormContainer } onEnter={ this._ensureLoggedIn } />
          <Route path="/login" component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path="/signup" component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
        </Route>
      </Router>
    )
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
    if(this.props.currentUser){
      replace('/');
    }
  }

  render() {
    return this.routerconst;
  }
}

export default AppRouter;

// <Route path="/upload" component={ UploadFormContainer } onEnter={ this._ensureLoggedIn } >
//   <Route path="/comment" component={ CommentContainer } onEnter={ this._ensureLoggedIn } />
//   </Route>
//
//   UploadForm
//     <div className=upload-form>
//     {children}
//
//   <Route path="/upload" component={ UploadFormContainer } onEnter={ this._ensureLoggedIn } />
//   <Route path="/upload/comment" component={ CommentContainer } onEnter={ this._ensureLoggedIn } />


// getSingleMeme (nextState, replace, callback) {
//   this.props.requestSingleMeme(parseInt(nextState.params.memeId));
// }
// <Route path="/memes/:memeId" component={ MemeShowContainer } onEnter={ this.getSingleMeme.bind(this) }/>
// <Route path="/memes/:memeId" component={ MemeIndexContainer } onEnter={ this.props.requestSingleMeme } />
