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
          <div className="greet">Logged in as: <div className="name"><Link to={"/users/"+this.props.currentUser.id}>{this.props.currentUser.name}</Link></div></div>
          <div className="authbutton topbutton logoutbutton" onClick={this.props.logout}>Log Out</div>
          <Link to="/upload"><div className="uploadbutton topbutton">Upload</div></Link>
        </div>
      );
    } else {
      return (
        <div className="authbuttons">
          <Link to="/signup"><div className="authbutton topbutton">Register</div></Link>
          <Link to="/login"><div className="authbutton topbutton">Log In</div></Link>
          <div className="authbutton topbutton troll" onClick={this.props.loginGuest}>Guest</div>
        </div>
      );
    }
  }

  fewTags(){
    return (
      <div className="tagbuttons">
        <Link to="/hot"><div className="tagbutton topbutton">Hot</div></Link>
        <Link to="/fresh"><div className="tagbutton topbutton">Fresh</div></Link>
        <Link to="/tagged/meat"><div className="tagbutton topbutton">Meat</div></Link>
        <Link to="/tagged/veggies"><div className="tagbutton topbutton">Veggies</div></Link>
        <Link to="/tagged/dessert"><div className="tagbutton topbutton">Dessert</div></Link>
      </div>
    );
  }

  render(){
    return (
      <header className="topbar group">
        <nav className="widthcontainer">
          <h4 className="logo"><Link to="/images"><img src='http://res.cloudinary.com/dujcpxlhk/image/upload/v1502403247/u5its6jzisnyvdpkpoh9.jpg' id="logoimage" /></Link></h4>
          { this.fewTags() }
          { this.variableButtons() }
        </nav>
      </header>
    );
  }

}

export default Authbar;
