import React from 'react';
import { Link, withRouter } from 'react-router';

class Splash extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return (<div className="splashcontainercontainer"><Link to="/memes"><div className="splashcontainer">9Brag, The Large Feet Of The Internet</div></Link></div>);
  }

}



export default withRouter(Splash);
