import React from 'react';
import { Link, withRouter } from 'react-router';
import MemeIndexItem from './meme_index_item';

class MemeIndex extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      commentBody: ""
    };
    this.indexMemes = this.indexMemes.bind(this);
    this.showMeme = this.showMeme.bind(this);
    this.showAddition = this.showAddition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleClick (router, url){
    () => router.push(url)
  }

  handleSubmit (){
    e.preventDefault();
    const formType = this.props.location.pathname.slice(1)
    const processForm = (formType === 'login') ? this.props.login : this.props.signup;
    const user = this.state;
    this.props.addComment({user});
  }

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}


  showMeme(id){
    const showThisMeme = this.props.memes[id];
    return (
      <div className="showDiv">
        <li>{this.memeItem(showThisMeme)}</li>
        <li>{this.showAddition(showThisMeme)}</li>
      </div>
    );
  }


  showAddition(meme){
    let commentForm;
    if(this.props.currentUser){
      commentForm = (
        <form onSubmit={this.handleSubmit} className="commentform">
          <div className="addcommentbox">
            <input type="text" onChange={this.update("commentBody")} value={this.state.commentBody} className="commentinput" />
            <button className="submitbutton">Add Comment</button>
          </div>
        </form>
      )
    }

    return (
      <ul>
        {meme.comments.map( (comment) => {
          return (
              <div className="commentArea">
                {commentForm}
                <div className="oneComment">
                  <div className="commentUser">{comment.name}</div>
                  <div className="commentBody">{comment.body}</div>
                </div>
              </div>
            );
          })
        }
      </ul>
    );
  }



  indexMemes(){
    const memeKeys = Object.keys(this.props.memes);
    let memesArray = memeKeys.map(key => this.props.memes[key])
    return (
      memesArray.map(meme => <MemeIndexItem key={meme.title} meme={meme} />)
    );
  }

  render(){
    return (
      <div className="memeindex">
        <ul>
          { this.indexMemes() }
        </ul>
      </div>
    );
  }

}

export default withRouter(MemeIndex);
