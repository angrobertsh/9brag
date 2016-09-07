import React from 'react';
import { Link, withRouter } from 'react-router';

class MemeIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.voteCounts = this.voteCounts.bind(this);
    this.memeTags = this.memeTags.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  voteCounts(meme){
    let count = 0;
    for(let j = 0; j < meme.votecount.length; j++){
      count += meme.votecount[j]["vote_val"];
    }
    return (<span className="votecountbox">{count}</span>)
  }

  memeTags(meme){
    let tagArr = [];
    let currentTag = "";
    let currentLink;
    for(let i = 0; i < meme.tagnames.length; i++) {
      currentTag = meme.tagnames[i]["tagname"];
      if(i === meme.tagnames.length-1){
        currentLink = <Link to={`/tagged/${currentTag}`} key={meme.id+currentTag}>{currentTag}</Link>
      } else {
        currentLink = <Link to={`/tagged/${currentTag}`} key={meme.id+currentTag}>{currentTag}, </Link>
      }
      tagArr.push(currentLink);
    }
    return (<div className="tagdiv">Tags: {tagArr}</div>)
  }

  handleUpvote(e) {
    e.preventDefault();
    const vote = {vote: {vote_val: 1, votable_id: this.props.meme.id}};
    this.props.upvote(vote, this.props.meme.id);
  }

  handleDownvote(e) {
    e.preventDefault();
    const vote = {vote: {vote_val: -1, votable_id: this.props.meme.id}};
    this.props.upvote(vote, this.props.meme.id);
  }

  render(){
    let meme = this.props.meme;
    return (
      <li key={meme.id} className="memebox">
        <div className="titlepic">
          <div className="memeTitle" ><Link to={`/memes/${meme.id}`}>{meme.title}</Link></div>
          <Link to={`/memes/${meme.id}`}><img src={meme.url} alt={meme.title} /></Link>
        </div>
        <div className="memebottominfo">
          <div className="tagsattribution">
            <div className="memeAttribution"><a href={meme.attribution}>{meme.attribution}</a></div>
            { this.memeTags(meme) }
          </div>
          <div className="voteauthorcomment">
            <div className="votebox">
              <div className="upvotebutton" onClick={this.handleUpvote} />
              <span className="votecount">{ this.voteCounts(meme) }</span>
              <div className="downvotebutton" onClick={this.handleDownvote} />
            </div>
            <div className="memeUsername">From {meme.user}</div>
            <div className="commenttotal"> <Link to={`memes/${meme.id}`}>{meme.comments.length} comments </Link></div>
          </div>
        </div>
      </li>
    );
  }

}

export default MemeIndexItem;
