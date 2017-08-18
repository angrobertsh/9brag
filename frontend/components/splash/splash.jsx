import React from 'react';
import { Link, withRouter } from 'react-router';


const Splash = () => (
  <div className="splashcontainercontainer">
    <div className="splashbackground"></div>
    <Link to="/images">
      <div className="splashcontainer">
        <div id="splash">
          <ul id="splashphotos">
            <li id="splash1" className="splashphoto"></li>
            <li id="splash2" className="splashphoto"></li>
            <li id="splash3" className="splashphoto"></li>
          </ul>
          <ul id="splashtext">
            <li>9brag</li>
            <li className="mini">
              Your Foodie Showcase
            </li>
          </ul>
        </div>
      </div>
    </Link>
  </div>
);
// <ul id="splashphotos-2">
//   <li id="splash4" className="splashphoto fade-3"></li>
//   <li id="splash5" className="splashphoto fade-1"></li>
//   <li id="splash6" className="splashphoto fade-2"></li>
// </ul>


export default withRouter(Splash);
