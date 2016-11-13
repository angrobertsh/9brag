import React from 'react';
import { Link, withRouter } from 'react-router';
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
    this.setState({commentBody: ""});
  }

  commentForm(){
    let commentForm = <div></div>;
    if(this.props.currentUser){
      commentForm = (
        <form onSubmit={this.handleSubmit} className="commentform">
          <div className="addcommentbox">
            <label><p>Add Comment:</p>
              <textarea onChange={this.update("commentBody")} value={this.state.commentBody} className="commentinput" />
              <button className="addcommentbutton">Add Comment</button>
            </label>
          </div>
        </form>
      )
    }
    return commentForm;
  }

  commentsInfo(meme){
    return (
      <div className="commentbox">
        { this.commentForm() }
        <div className="commentbodies">
          <label> <p>Comments:</p>
            <ul>
              {meme.comments.slice().reverse().map( (comment) => {
                return (
                    <div key={comment.id+comment.body} className="commentArea">
                      <div className="oneComment">
                        <div className="commentimage">
                          <img src={comment.user_url} />
                        </div>
                        <div className="smolbox">
                          <div className="commentUser"><Link to={`/users/${comment.comment_user_id}`}>{comment.name}</Link></div>
                          <div className="commentDate">{comment.time}</div>
                          <div className="commentBody">{comment.body}</div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </ul>
          </label>
        </div>
      </div>
    );
  }

  render() {
    if(this.props.meme === undefined){
      return (<div></div>);
    }
    let meme = this.props.meme[parseInt(Object.keys(this.props.meme)[0])];
    return (
      <div className="memeshow">
        <MemeIndexItem meme={meme} upvote={this.props.upvote} currentUser={this.props.currentUser}/>
        { this.commentsInfo(meme) }
      </div>
    )
  }
}

export default withRouter(MemeShow);
