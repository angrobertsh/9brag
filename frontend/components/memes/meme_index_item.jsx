import React from 'react';
import { Link, withRouter } from 'react-router';

class MemeIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.voteCounts = this.voteCounts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.memeTags = this.memeTags.bind(this);
  }

  handleClick (router, url){
    () => router.push(url)
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
    for(let i = 0; i < meme.tagnames.length; i++) {
      tagArr.push(meme.tagnames[i]["tagname"]);
    }
    tagString = tagArr.join(", ");
    return (<div className="tagdiv">Tags: {tagString}</div>);
  }

//onClick={this.handleClick}

  render(){
    let meme = this.props.meme;
    return (
      <li key={this.props.key} className="memebox">
        <div className="memeTitle" >{meme.title}</div>
        <img src={meme.url} alt={meme.title} />
        <div className="memeAttribution">{meme.attribution}</div>
        { this.memeTags(meme) }
        <div className="memeUsername">From {meme.user}</div>
        <div className="votebox">
          <button className="upbutton">Upvote</button>
          { this.voteCounts(meme) }
          <button className="downbutton">Downvote</button>
        </div>
      </li>
    );
  }

}

export default MemeIndexItem;
