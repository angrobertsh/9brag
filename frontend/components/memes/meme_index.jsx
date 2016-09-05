import React from 'react';
import { Link, withRouter } from 'react-router';
import MemeIndexItem from './meme_index_item';

class MemeIndex extends React.Component{

  constructor(props){
    super(props);
    this.indexMemes = this.indexMemes.bind(this);
    this.matchTags = this.matchTags.bind(this);
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
    const tags = this.props.params.tags;
    const memeKeys = Object.keys(this.props.memes);
    let memesArray = memeKeys.map(key => this.props.memes[key]);
    if(tags){
      let filteredArray = this.matchTags(memesArray, tags);
      return (
        filteredArray.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote}/>)
      );
    } else {
      return (
        memesArray.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote}/>)
      );
    }
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
