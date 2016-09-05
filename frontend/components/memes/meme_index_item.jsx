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
    let tagString = "";
    let currentTag = "";
    let currentLink;
    for(let i = 0; i < meme.tagnames.length; i++) {
      currentTag = meme.tagnames[i]["tagname"];
      currentLink = <Link to={`/memes/${currentTag}`}>{currentTag} </Link>
      tagArr.push(currentLink);
    }
    tagString = tagArr.join(", ");
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
        <Link to={`/memes/${meme.id}`}><div className="memeTitle" >{meme.title}</div></Link>
        <Link to={`/memes/${meme.id}`}><img src={meme.url} alt={meme.title} /></Link>
        <div className="memeAttribution">{meme.attribution}</div>
        { this.memeTags(meme) }
        <div className="memeUsername">From {meme.user}</div>
        <div className="votebox">
          <button className="upbutton" onClick={this.handleUpvote}>Upvote</button>
          { this.voteCounts(meme) }
          <button className="downbutton" onClick={this.handleDownvote}>Downvote</button>
        </div>
      </li>
    );
  }

}

export default MemeIndexItem;
