import React from 'react';
import Header from './Header';
import DressList from './DressList';
import Profile from './Profile';
import Bio from './Bio';
import FeedInput from './FeedInput';
import FeedContent from './FeedContent';


function App(){
  return(
    <div>
      <Header/>
      <Profile/>
      <FeedInput/>
      <FeedContent/>
      <Bio/>
      <DressList/>
    </div>
  );
}

export default App;
