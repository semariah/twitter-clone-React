import React from 'react';
import Header from './Header';
import DressList from './DressList';
import Profile from './Profile';
import Bio from './Bio';
import FeedInput from './FeedInput';
import FeedPost from './FeedPost';
import SuggestedFriends from './SuggestedFriends';
import Nav from './Nav';


function App(){
  return(
    <div>
      <Header/>
      <Nav/>
      <Profile/>
      <Bio/>
      <FeedInput/>
      <FeedPost/>
      <DressList/>
      <SuggestedFriends/>
    </div>
  );
}

export default App;
