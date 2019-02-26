import React from 'react';


function ProfileLinks(){
  const LinkStyle = {
    padding: '5px'
  };
  return(
    <div>
      <a style={LinkStyle} href="#">Following</a>
      <a style={LinkStyle} href="#">Followers</a>
    </div>
  );
}

export default ProfileLinks;
