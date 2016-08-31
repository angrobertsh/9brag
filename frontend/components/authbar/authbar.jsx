import React from 'react';
import { Link } from 'react-router';

class Authbar extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    if(this.props.currentUser){
      return (
        <div className="authbuttons">
          <button className="authbutton" onClick={this.props.logout}>Log Out</button>
          <button className="uploadbutton">Upload Meme</button>
        </div>
      )
    } else {
      return(
        <div className="authbuttons">
          <Link to="/login"><button className="authbutton">Log In</button></Link>
          <Link to="/signup"><button className="authbutton">Register</button></Link>
        </div>
      )
    }
  }
}

export default Authbar;
