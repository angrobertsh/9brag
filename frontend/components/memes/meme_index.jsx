import React from 'react';
import { Link, withRouter } from 'react-router';
import MemeIndexItem from './meme_index_item';

class MemeIndex extends React.Component{

  constructor(props){
    super(props);
    this.indexMemes = this.indexMemes.bind(this);
    this.matchTags = this.matchTags.bind(this);
  }

  componentWillMount() {
    document.addEventListener('scroll', function (event) {
      if (document.body.scrollHeight == (document.body.scrollTop + window.innerHeight)) {
        // fetch more memes

      }
    });
  }

  matchTags(arr, tags){
    return arr.filter((el) => {
      let anymatch = false;
        el.tagnames.forEach((obj) =>
        {
          if(obj.tagname === tags){
            anymatch = true;
          }
        })
      return anymatch;
      }
    )
  }

  indexMemes(){
    let memesArray = this.props.memes.map((el) => (el[Object.keys(el)]));
    return(memesArray.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote} currentUser={this.props.currentUser}/>));

    // const tags = this.props.params.tags;
    // const hotorfresh = this.props.location.pathname;
    // let filteredArray = [];
    // const memeKeys = Object.keys(this.props.memes);
    // let memesArray = memeKeys.map(key => this.props.memes[key]);
    // if(tags){
    //   filteredArray = this.matchTags(memesArray, tags);
    //   return (
    //     filteredArray.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote} currentUser={this.props.currentUser}/>)
    //   );
    // } else if(hotorfresh === "/hot") {
    //   let hotsort = (a, b) => {if(a.comments.length + a.votecount.length < b.comments.length + b.votecount.length){ return 1; } else if(a.comments.length + a.votecount.length > b.comments.length + b.votecount.length) {return -1;} else{ return 0;}}
    //   filteredArray = memesArray.sort(hotsort);
    //   return (
    //     memesArray.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote} currentUser={this.props.currentUser}/>)
    //   );
    // } else if(hotorfresh === "/fresh") {
    //   let freshsort = (a, b) => {if(a.created_at < b.created_at){return 1;}else if(a.created_at > b.created_at){return -1;}else{return 0;}}
    //   filteredArray = memesArray.sort(freshsort);
    //   return (
    //     memesArray.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote} currentUser={this.props.currentUser}/>)
    //   );
    // } else {
    //   return (
    //     memesArray.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote} currentUser={this.props.currentUser}/>)
    //   );
    // }

  }


  render(){
    return (
      <div className="memeindex">
        <Link to="/memes"><div className="upnav"><img id="upcaret" src="http://res.cloudinary.com/dujcpxlhk/image/upload/v1475617890/uiv3dseta4kccja3gwsw.png" /></div></Link>
        <ul>
          { this.indexMemes() }
        </ul>
      </div>
    );
  }

}

export default withRouter(MemeIndex);
