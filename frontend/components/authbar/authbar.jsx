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
          <button className="authbutton" onClick={this.props.logout}>Log Out</button>
          <button className="uploadbutton">Upload</button>
        </div>
      );
    } else {
      return (
        <div className="authbuttons">
          <Link to="/signup"><button className="authbutton">Register</button></Link>
          <Link to="/login"><button className="authbutton">Log In</button></Link>
          <button className="authbutton" onClick={this.props.loginGuest}>Troll</button>
        </div>
      );
    }
  }

  fewTags(){
    return (
      <div className="tagbuttons">
        <Link to="/"><button className="tagbutton">Tag 1</button></Link>
        <Link to="/"><button className="tagbutton">Tag 2</button></Link>
        <Link to="/"><button className="tagbutton">Tag 3</button></Link>
        <Link to="/"><button className="tagbutton">Tag 4</button></Link>
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
