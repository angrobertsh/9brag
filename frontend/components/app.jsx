import React from 'react';
import { Link } from 'react-router';

const App = ({children}) => (
  <div>
    <Link to="/" className="header-link"><h1>9Brag, The Large Feet of the Internet</h1></Link>
    {children}
  </div>
);

export default App;
