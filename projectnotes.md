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



















# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: "Jarno", password: "spoopy")
User.create(name: "Simperella", password: "spoopy")
User.create(name: "Poushtart", password: "spoopy")
User.create(name: "CaNdYcAnE748", password: "spoopy")
User.create(name: "racketball6868", password: "spoopy")
User.create(name: "PeplosKore", password: "spoopy")
User.create(name: "obeocookiE", password: "spoopy")
User.create(name: "Ranaferboi", password: "spoopy")
User.create(name: "JolenejoleneJOLEEENE", password: "spoopy")
User.create(name: "password123", password: "justkidding")
User.create(name: "Guest", password: "123456")
User.create(name: "Troll", password: "lololxd")

Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473132871/chickenspiral_fplreu.jpg", title: "I for one welcome our new poultry overlords", user_id: 1, ourTags: "animals")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473135484/scoob2_ft2lwe.jpg", title: "That one friend", user_id: 2, ourTags: "animals, scooby, substance, cartoon")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473135475/fwp2_lmqod3.jpg", title: "3meta5me", user_id: 3, ourTags: "fwp, vintage")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473132862/donaldbutt_pg7sff.jpg", title: "Me on snapchat", user_id: 9, ourTags: "nsfw, animals")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473134902/library_qm6nfd.jpg", title: "The library, open since 1733", user_id: 4, ourTags: "vintage, art")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473132943/throwbreadonme_zsnxvc.jpg", title: "ok", user_id: 5, ourTags: "animals, bread")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/c_crop/v1473137466/succ_oqx4sk.jpg", title: "guy what are you hungry for???", user_id: 1, ourTags: "bread, animals, succ, nsfw")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473132901/nailpolish_hozeq5.jpg", title: "When they don't have your color", user_id: 4, ourTags: "color, fwp")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473132890/schoolmermaid_yfl6a9.png", title: "Back to School Advice", user_id: 5, ourTags: "mermaids", attribution: "https://www.wikihow.com")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473132885/sicklady_qo6rwt.jpg", title: "Medicine", user_id: 2, ourTags: "vintage, art, text")
Meme.create(url: "http://res.cloudinary.com/dujcpxlhk/image/upload/v1473132877/myhobby_lyfxn3.jpg", title: "How about crying? Is crying a hobby?", user_id: 1, ourTags: "vintage, art, text")

Comment.create(user_id: 2, meme_id: 1, body: "lul 2 gud")
Comment.create(user_id: 1, meme_id: 1, body: "lul 3 gud")
Comment.create(user_id: 2, meme_id: 1, body: "LUL 4 GUD!!!!!!!!")
Comment.create(user_id: 3, meme_id: 1, body: "stfu losers also first comment")
Comment.create(user_id: 4, meme_id: 1, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 5, meme_id: 1, body: "wtf spambot gtfo... to my room")
Comment.create(user_id: 6, meme_id: 1, body: "This morning I went to go pick up my milk from the milkman who delivered it to my doorstep and I went outside and itl ooked like this cat had already been there it it looked just like thid one!!!! right nancy??")
Comment.create(user_id: 7, meme_id: 2, body: "haha i can't even get out of bed wifout doin dis once")
Comment.create(user_id: 8, meme_id: 3, body: "NEGAVERSE FOREVER. TEAM BERYL FROM BEYOND THE DARKNESS.")
Comment.create(user_id: 1, meme_id: 4, body: "Wenty went to the mall and bought this once.")
Comment.create(user_id: 2, meme_id: 3, body: "dis is a symbol of soceity todei")
Comment.create(user_id: 3, meme_id: 3, body: "What part of it?")
Comment.create(user_id: 2, meme_id: 3, body: "the dumb parte?")
Comment.create(user_id: 3, meme_id: 3, body: "Can you elaborate further? I don't understand.")
Comment.create(user_id: 2, meme_id: 3, body: "lyke the wei it wud be if wede work together it'd be wei better den now lyke in dis meme")
Comment.create(user_id: 3, meme_id: 3, body: "What would be better than today? We have running water, the sun is shining, and God is watching over the USA.")
Comment.create(user_id: 2, meme_id: 3, body: "lol nvm u just dun get it ;P")
Comment.create(user_id: 3, meme_id: 3, body: "I'm sincerely trying to understand what you're trying to say.")
Comment.create(user_id: 4, meme_id: 1, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 4, meme_id: 2, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 4, meme_id: 3, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 4, meme_id: 4, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 4, meme_id: 5, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 4, meme_id: 6, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 4, meme_id: 7, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 4, meme_id: 8, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 4, meme_id: 9, body: "I just made $65 in 20 seconds at www.fr33 ph4rm4z00t1culz.nz!")
Comment.create(user_id: 6, meme_id: 5, body: "my son in law has hair just like that on his back!! ha ha ha!")
Comment.create(user_id: 1, meme_id: 6, body: "~Swingin in the backyard pull up in your fast car whistlin mah name~")
Comment.create(user_id: 2, meme_id: 7, body: "holy christ protect us sinners")
Comment.create(user_id: 3, meme_id: 7, body: "I'm well watered like a horse")
Comment.create(user_id: 9, meme_id: 8, body: "I got dead person hands. SQUAWK! -John Everdeen")

Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 7)
Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 8)
Vote.create(votable_type: "Meme", votable_id: 1, vote_val: 1, user_id: 9)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: 1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: 1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: 1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: 1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: 1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: 1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: -1, user_id: 7)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: -1, user_id: 8)
Vote.create(votable_type: "Meme", votable_id: 2, vote_val: -1, user_id: 9)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 7)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 8)
Vote.create(votable_type: "Meme", votable_id: 3, vote_val: -1, user_id: 9)
Vote.create(votable_type: "Meme", votable_id: 4, vote_val: -1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 4, vote_val: -1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 4, vote_val: -1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 4, vote_val: -1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 4, vote_val: -1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 4, vote_val: -1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 4, vote_val: -1, user_id: 7)
Vote.create(votable_type: "Meme", votable_id: 4, vote_val: -1, user_id: 8)
Vote.create(votable_type: "Meme", votable_id: 5, vote_val: 1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 5, vote_val: 1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 5, vote_val: 1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 5, vote_val: 1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 5, vote_val: -1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 5, vote_val: -1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 5, vote_val: -1, user_id: 7)
Vote.create(votable_type: "Meme", votable_id: 6, vote_val: 1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 6, vote_val: 1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 6, vote_val: 1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 6, vote_val: 1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 6, vote_val: 1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 6, vote_val: 1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 6, vote_val: 1, user_id: 7)
Vote.create(votable_type: "Meme", votable_id: 6, vote_val: 1, user_id: 8)
Vote.create(votable_type: "Meme", votable_id: 7, vote_val: 1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 7, vote_val: 1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 7, vote_val: 1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 7, vote_val: 1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 7, vote_val: -1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 7, vote_val: -1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 8, vote_val: -1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 8, vote_val: -1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 8, vote_val: -1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 8, vote_val: -1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 8, vote_val: -1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 8, vote_val: -1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 8, vote_val: -1, user_id: 7)
Vote.create(votable_type: "Meme", votable_id: 8, vote_val: -1, user_id: 8)
Vote.create(votable_type: "Meme", votable_id: 9, vote_val: 1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 9, vote_val: 1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 9, vote_val: 1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 10, vote_val: 1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 10, vote_val: 1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 10, vote_val: 1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 10, vote_val: 1, user_id: 4)
Vote.create(votable_type: "Meme", votable_id: 10, vote_val: 1, user_id: 5)
Vote.create(votable_type: "Meme", votable_id: 10, vote_val: 1, user_id: 6)
Vote.create(votable_type: "Meme", votable_id: 10, vote_val: 1, user_id: 7)
Vote.create(votable_type: "Meme", votable_id: 10, vote_val: 1, user_id: 8)
Vote.create(votable_type: "Meme", votable_id: 11, vote_val: 1, user_id: 1)
Vote.create(votable_type: "Meme", votable_id: 11, vote_val: 1, user_id: 2)
Vote.create(votable_type: "Meme", votable_id: 11, vote_val: 1, user_id: 3)
Vote.create(votable_type: "Meme", votable_id: 11, vote_val: 1, user_id: 4)
