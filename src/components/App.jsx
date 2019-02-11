import React from 'react';
import Header from './Header';
import DressList from './DressList';
import Profile from './Profile';
import Bio from './Bio';


function App(){
  return(
    <div>
      <Header/>
      <Profile/>
      <Bio/>
      <DressList/>
    </div>
  );
}

export default App;
