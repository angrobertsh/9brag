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
        <Link to="/tagged/animals"><button className="tagbutton topbutton">Animals</button></Link>
        <Link to="/tagged/fwp"><button className="tagbutton topbutton">FWP</button></Link>
        <Link to="/tagged/vintage"><button className="tagbutton topbutton">Vintage</button></Link>
        <Link to="/tagged/nsfw"><button className="tagbutton topbutton">NSFW</button></Link>
      </div>
    );
  }

  render(){
    return (
      <header className="topbar group">
        <nav className="widthcontainer">
          <h4 className="logo"><Link to="/"><img src='http://res.cloudinary.com/dujcpxlhk/image/upload/v1473100469/f9gvavsmmgeemiyun6jp.png' id="logoimage" /></Link></h4>
          { this.fewTags() }
          { this.variableButtons() }
        </nav>
      </header>
    );
  }

}

export default Authbar;
