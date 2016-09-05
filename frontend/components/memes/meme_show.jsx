import React from 'react';
import { withRouter } from 'react-router';
import MemeIndexItem from './meme_index_item';

class MemeShow extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      commentBody: ""
    };
    this.commentsInfo = this.commentsInfo.bind(this);
    this.commentForm = this.commentForm.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => { this.setState({[field]: e.currentTarget.value }); };
  }

  handleSubmit (e){
    e.preventDefault();
    const comment = {comment: {body: this.state.commentBody, meme_id: parseInt(this.props.params.memeId)}};
    this.props.createComment(comment, parseInt(this.props.params.memeId));
  }

  commentForm(){
    let commentForm = <div></div>;
    if(this.props.currentUser){
      commentForm = (
        <form onSubmit={this.handleSubmit} className="commentform">
          <div className="addcommentbox">
            <textarea onChange={this.update("commentBody")} value={this.state.commentBody} className="commentinput" />
            <button className="submitbutton">Add Comment</button>
          </div>
        </form>
      )
    }
    return commentForm;
  }

  commentsInfo(meme){
    debugger
    return (
      <div className="commentbox">
        { this.commentForm() }
        <ul>
          {meme.comments.slice().reverse().map( (comment) => {
            return (
                <div key={comment.id} className="commentArea">
                  { this.commentForm }
                  <div key={comment.id} className="oneComment">
                    <div key={comment.id} className="commentUser">{comment.name}</div>
                    <div key={comment.id} className="commentDate">{comment.time}</div>
                    <div key={comment.id} className="commentBody">{comment.body}</div>
                  </div>
                </div>
              );
            })
          }
        </ul>
      </div>
    );
  }

  render() {
    let meme = this.props.memes[parseInt(this.props.params.memeId)];
    if(meme === undefined){
      return (<div></div>);
    }
    return (
      <div className="memeshow">
        <MemeIndexItem meme={meme} upvote={this.props.upvote}/>
        { this.commentsInfo(meme) }
      </div>
    )
  }
}

export default withRouter(MemeShow);
