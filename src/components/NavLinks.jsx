import React from 'react';


function NavLinks(){
  const NavStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid grey',
    padding: '5px',
    paddingBottom: '15px'
  };



  return(
    <div style={NavStyle}>
      <a href="#">Home</a>
      <a href="#">Notification</a>
      <a href="#">Messages</a>
    </div>
  );
}

export default NavLinks;
