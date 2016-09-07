import React from 'react';
import { Link, withRouter } from 'react-router';
import MemeIndexItem from '../memes/meme_index_item';

class UserPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      url: "",
      memes: "",
      karma: ""
    }
    this.karmaBox = this.karmaBox.bind(this);
    this.userUploadPicture = this.userUploadPicture.bind(this);
    this.userMemes = this.userMemes.bind(this);
    this.nameBox = this.nameBox.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user){
      this.setState({id: nextProps.user.id, name: nextProps.user.name, url: nextProps.user.url, karma: nextProps.user.karma, memes: nextProps.user.memes})
    }
  }

  handleUpload() {
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS,
      (error, images) => {
        if(error === null) {
      		this.props.updateUser({url: images[0].url});
        }
      }
    );
  }

  karmaBox() {
    if(this.state.karma > 70){
      return (<div className="usertitle memelord">Memelord</div>);
    } else if(this.state.karma > 50){
      return (<div className="usertitle redditnoob">Reddit Bebe</div>);
    } else if(this.state.karma > 25){
      return (<div className="usertitle tumblrite">Tumblrite</div>);
    } else {
      return (<div className="usertitle nooblord">Nooblord</div>);
    }
  }

  userUploadPicture() {
    if(this.props.currentUser) {
      if(this.props.currentUser.id === parseInt(this.props.params.userId)) {
        return (<div className="userimage"><img src={this.state.url} /> <div className="uploadclick" onClick={this.handleUpload}>AAAAAAAAAAAAAH!</div></div>);
      }
    }
    return (<div className="userimage"><img src={this.state.url} /> </div>);
  }

  nameBox() {
    if(this.state.karma > 70){
      return (<div className="username memelordname">{this.state.name}</div>);
    } else if(this.state.karma > 50){
      return (<div className="username redditnoobname">{this.state.name}</div>);
    } else if(this.state.karma > 25){
      return (<div className="username tumblritename">{this.state.name}</div>);
    } else {
      return (<div className="username nooblordname">{this.state.name}</div>);
    }
  }

  userMemes() {
    let myMemes = [];
    const memeKeys = Object.keys(this.props.memes);
    let memesArray = memeKeys.map(key => this.props.memes[key]);
    memesArray.forEach((meme) => {
        if(meme.user_id === parseInt(this.props.params.userId)){
          myMemes.push(meme);
        }
      }
    )
    return (
      myMemes.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote}/>)
    );
  }

  render() {
    if(this.state.id === ""){
      return (<div></div>);
    } else {
      return (
        <div className="userPageContainer">
          <div className="userTitleInfo">
            {this.karmaBox()}
            {this.userUploadPicture()}
            {this.nameBox()}
          </div>
          <div className="userMemeContainer">
            <div className="myMemestitle"> {this.state.name+"'s"} Memes </div>
              {this.userMemes()}
          </div>
        </div>
      );
    }
  }

}

export default withRouter(UserPage);
