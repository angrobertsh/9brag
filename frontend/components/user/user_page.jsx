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
      karmatot: "",
      interestkarma: "",
      votekarma: "",
      contributekarma: ""
    }
    this.karmaBox = this.karmaBox.bind(this);
    this.karmaParse = this.karmaParse.bind(this);
    this.userUploadPicture = this.userUploadPicture.bind(this);
    this.userMemes = this.userMemes.bind(this);
    this.nameBox = this.nameBox.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user){
      this.setState({id: nextProps.user.id, name: nextProps.user.name, url: nextProps.user.url, karmatot: nextProps.user.karmatot, memes: nextProps.user.memes, contributekarma: nextProps.user.contributekarma, votekarma: nextProps.user.votekarma, interestkarma: nextProps.user.interestkarma})
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

  karmaParse() {
    return (<div className="tellkarma">Karma <div className="karma">{this.state.karmatot}</div> <div className="subkarmas">(Vote: {this.state.votekarma}, Comment: {this.state.interestkarma}, Meme: {this.state.contributekarma})</div></div>)
  }

  karmaBox() {
    if(this.state.karmatot > 25){
      return (<div className="usertitle memelord">Gourmet</div>);
    } else if(this.state.karmatot > 15){
      return (<div className="usertitle redditnoob">Foodie</div>);
    } else if(this.state.karmatot > 10){
      return (<div className="usertitle tumblrite">Grazer</div>);
    } else {
      return (<div className="usertitle nooblord">Beginner</div>);
    }
  }

  userUploadPicture() {
    if(this.props.currentUser) {
      if(this.props.currentUser.id === parseInt(this.props.params.userId)) {
        return (<div className="userimage"><div className="uploadclick" onClick={this.handleUpload}>+</div><img src={this.state.url} /> </div>);
      }
    }
    return (<div className="userimage"><img src={this.state.url} /> </div>);
  }

  nameBox() {
    if(this.state.karmatot > 25){
      return (<div className="username memelordname"><img src="http://res.cloudinary.com/dujcpxlhk/image/upload/a_328/v1473368223/t1igw0ykhkrcwtfgvtsz.png" />{this.state.name}</div>);
    } else if(this.state.karmatot > 15){
      return (<div className="username redditnoobname"><img src="http://res.cloudinary.com/dujcpxlhk/image/upload/v1473372125/q6jaoysu3ikdkmnwt9fk.png" />{this.state.name}</div>);
    } else if(this.state.karmatot > 10){
      return (<div className="username tumblritename"><img src="http://res.cloudinary.com/dujcpxlhk/image/upload/a_35/v1473368140/lunetswfi9qtfcdqmbdj.png" />{this.state.name}</div>);
    } else {
      return (<div className="username nooblordname"><img src="http://res.cloudinary.com/dujcpxlhk/image/upload/v1473287659/blmn2et8ktgdh44a7hq3.png" />{this.state.name}</div>);
    }
  }

  userMemes() {
    // let myMemes = [];
    // const memeKeys = Object.keys(this.props.memes);
    // let memesArray = memeKeys.map(key => this.props.memes[key]);
    // memesArray.forEach((meme) => {
    //     if(meme.user_id === parseInt(this.props.params.userId)){
    //       myMemes.push(meme);
    //     }
    //   }
    // )
    let memesArr = this.props.memes.map((el) => (el[Object.keys(el)]));
    return (
      memesArr.map(meme => <MemeIndexItem key={meme.title} meme={meme} upvote={this.props.upvote} currentUser={this.props.currentUser}/>)
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
            {this.karmaParse()}
          </div>
          <div className="userMemeContainer">
            <div className="myMemestitle"> {this.state.name+"'s"} Memes </div>
              <ul className="memeUL">
                {this.userMemes()}
              </ul>
          </div>
        </div>
      );
    }
  }

}

export default withRouter(UserPage);
