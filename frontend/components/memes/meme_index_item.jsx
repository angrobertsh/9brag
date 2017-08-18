import React from 'react';
import { Link, withRouter } from 'react-router';

class MemeIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.voteCounts = this.voteCounts.bind(this);
    this.memeTags = this.memeTags.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.attributer = this.attributer.bind(this);
    this.whichTransitionEvent = this.whichTransitionEvent.bind(this);
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

  attributer(meme){
    let attributionstring = <div className="memeAttribution" />;
    if(meme.attribution){
      if(meme.attribution.substring(0,4) === "www."){
        attributionstring = (<div className="memeAttribution"><a href={meme.attribution}>{meme.attribution}</a></div>)
      } else {
        attributionstring = (<div className="memeAttribution">{meme.attribution}</div>)
      }
    }
    return attributionstring;
  }

  handleUpvote(e) {
    e.preventDefault();

    let activeEl = 0;

    if(this.props.currentUser){
      if(this.props.currentUser.votes[this.props.meme.id]) {
        if(this.props.currentUser.votes[this.props.meme.id].vote_val == 1){
          activeEl = document.getElementById("nvm");
        } else {
          activeEl = document.getElementById("yas");
        }
      } else {
        activeEl = document.getElementById("yas");
      }
      activeEl.classList.add("fadeIn", "animated", "visible");
      activeEl.classList.remove("hidden");

      let transitionEvent = this.whichTransitionEvent();
      transitionEvent && activeEl.addEventListener(transitionEvent, () => {
        activeEl.classList.remove("fadeIn", "animated", "visible");
        activeEl.classList.add("hidden");
      });

    }

    const vote = {vote: {vote_val: 1, votable_id: this.props.meme.id}};
    this.props.upvote(vote, this.props.meme.id);
  }

  handleDownvote(e) {
    e.preventDefault();

    let activeEl = 0;

    if(this.props.currentUser){
      if(this.props.currentUser.votes[this.props.meme.id]) {
        if(this.props.currentUser.votes[this.props.meme.id].vote_val == -1){
          activeEl = document.getElementById("nvm");
        } else {
          activeEl = document.getElementById("boo");
        }
      } else {
        activeEl = document.getElementById("boo");
      }
      activeEl.classList.add("fadeIn", "animated", "visible");
      activeEl.classList.remove("hidden");

      let transitionEvent = this.whichTransitionEvent();
      transitionEvent && activeEl.addEventListener(transitionEvent, () => {
        activeEl.classList.remove("fadeIn", "animated", "visible");
        activeEl.classList.add("hidden");
      });

    }

    const vote = {vote: {vote_val: -1, votable_id: this.props.meme.id}};
    this.props.upvote(vote, this.props.meme.id);
  }


  whichTransitionEvent(){
    let t;
    let el = document.createElement('fakeelement');
    let transitions = {
      'animation':'animationend',
      'OAnimation':'oAnimationEnd',
      'MozAnimation':'animationend',
      'WebkitAnimation':'webkitAnimationEnd'
    }

    for(t in transitions){
      if( el.style[t] !== undefined ){
        return transitions[t];
      }
    }
  }

  render(){
    let meme = this.props.meme;
    return (
      <li key={meme.id} className="memebox">
        <div className="titlepic">
          <div className="memeTitle" ><Link to={`/images/${meme.id}`}>{meme.title}</Link></div>
          <Link to={`/images/${meme.id}`}><img src={meme.url} alt={meme.title} /></Link>
        </div>
        <div className="memebottominfo">
          <div className="tagsattribution">
            { this.attributer(meme) }
            { this.memeTags(meme) }
          </div>
          <div className="voteauthorcomment">
            <div className="votebox">
              <div className="upvotebutton" onClick={this.handleUpvote} />
              <span className="votecount">{ this.voteCounts(meme) }</span>
              <div className="downvotebutton" onClick={this.handleDownvote} />
            </div>
            <div className="memeUsername">From <Link to={`/users/${meme.user_id}`}>{meme.user}</Link></div>
            <div className="commenttotal"> <Link to={`memes/${meme.id}`}>{meme.comments.length} comments </Link></div>
          </div>
        </div>
      </li>
    );
  }

}

export default MemeIndexItem;
