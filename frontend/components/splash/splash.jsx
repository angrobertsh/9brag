import React from 'react';
import { Link, withRouter } from 'react-router';

class Splash extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return (<div className="splashcontainercontainer"><Link to="/memes"><div className="splashcontainer"><p><img src="http://res.cloudinary.com/dujcpxlhk/image/upload/v1473100469/f9gvavsmmgeemiyun6jp.png" />9Brag</p><p className="mini">The Large Feet of The Internet</p></div></Link></div>);
  }

}



export default withRouter(Splash);
