import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import MemeIndexContainer from '../memes/meme_index_container';
import AuthBarContainer from '../authbar/authbar_container';
import SessionFormContainer from '../session_form/session_form_container';
import UploadFormContainer from '../upload_form/upload_form_container';
import MemeShowContainer from '../memes/meme_show_container';

import App from '../app';

class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this)
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

  // on enter hook for app request all memes
  // on enter hook for show 1 meme requests 1 meme

  // <Route path="/memes/:memeId" component={ MemeIndexContainer } onEnter={ this.props.requestSingleMeme } />


  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={this.props.requestAllMemes}>
          <IndexRoute component={ MemeIndexContainer } />;
          <Route path="/memes/:memeId" component={ MemeShowContainer } onEnter={ this.props.requestSingleMeme } />
          <Route path="/upload" component={ UploadFormContainer } onEnter={ this._ensureLoggedIn } />
          <Route path="/login" component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path="/signup" component={ SessionFormContainer } onEnter={ this._redirectIfLoggedIn } />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;

// <Route path="/upload" component={ UploadFormContainer } onEnter={ this._ensureLoggedIn } >
//   <Route path="/comment" component={ CommentContainer } onEnter={ this._ensureLoggedIn } />
//   </Route>
//
//   UploadForm
//     <div classname=upload-form>
//     {children}
//
//   <Route path="/upload" component={ UploadFormContainer } onEnter={ this._ensureLoggedIn } />
//   <Route path="/upload/comment" component={ CommentContainer } onEnter={ this._ensureLoggedIn } />
