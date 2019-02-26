import React from 'react';
import NavLinks from './NavLinks';
import NavSearch from './NavSearch';
import NavTweet from './NavTweet';

function Nav(){

  const OtherStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    padding: '5px',
    paddingBottom: '15px'
  };
  return(
    <div>
      <NavLinks/>
      <div style={OtherStyle}>
        <NavSearch/>
        <NavTweet/>
      </div>

    </div>
  );
}

export default Nav;
