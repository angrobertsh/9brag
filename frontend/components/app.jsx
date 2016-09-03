import React from 'react';
import { Link } from 'react-router';
import AuthBarContainer from './authbar/authbar_container';
import MemeIndexContainer from './memes/meme_index_container';

const App = ({children}) => (
  <div>
    <AuthBarContainer />
    {children}
  </div>
);

export default App;
