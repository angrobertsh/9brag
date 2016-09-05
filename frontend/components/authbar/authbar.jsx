import React from 'react';
import { Link } from 'react-router';

class Authbar extends React.Component{

  constructor(props){
    super(props);
    this.variableButtons = this.variableButtons.bind(this);
    this.fewTags = this.fewTags.bind(this);
  }

  variableButtons(){
    if(this.props.currentUser) {
      return (
        <div className="authbuttons">
          <p>Logged in as: {this.props.currentUser.name}</p>
          <button className="authbutton topbutton logoutbutton" onClick={this.props.logout}>Log Out</button>
          <Link to="/upload"><button className="uploadbutton topbutton">Upload</button></Link>
        </div>
      );
    } else {
      return (
        <div className="authbuttons">
          <Link to="/signup"><button className="authbutton topbutton">Register</button></Link>
          <Link to="/login"><button className="authbutton topbutton">Log In</button></Link>
          <button className="authbutton topbutton troll" onClick={this.props.loginGuest}>Troll</button>
        </div>
      );
    }
  }

  fewTags(){
    return (
      <div className="tagbuttons">
        <Link to="/memes/cat"><button className="tagbutton topbutton">Cat</button></Link>
        <Link to="/memes/doge"><button className="tagbutton topbutton">Doge</button></Link>
        <Link to="/memes/wenty"><button className="tagbutton topbutton">Wenty</button></Link>
        <Link to="/memes/nsfw"><button className="tagbutton topbutton">NSFW</button></Link>
      </div>
    );
  }

  render(){
    return (
      <header className="topbar group">
        <nav className="widthcontainer">
          <h4 className="logo"><Link to="/"><img src='/assets/foot.png' id="logoimage" /></Link></h4>
          { this.fewTags() }
          { this.variableButtons() }
        </nav>
      </header>
    );
  }

}

export default Authbar;
