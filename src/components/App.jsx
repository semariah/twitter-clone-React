import React from 'react';
import Header from './Header';
import DressList from './DressList';
import Profile from './Profile';
import Bio from './Bio';
import FeedInput from './FeedInput';
import FeedContent from './FeedContent';
import SuggestedFriends from './SuggestedFriends';
import Nav from './Nav';


function App(){
  return(
    <div>
      <Header/>
      <Nav/>
      <Profile/>
      <FeedInput/>
      <FeedContent/>
      <Bio/>
      <DressList/>
      <SuggestedFriends/>
    </div>
  );
}

export default App;
