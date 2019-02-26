import React from 'react';
import ProfileLinks from './ProfileLinks';
import ProfileName from './ProfileName';
import ProfilePic from './ProfilePic';
import Bio from './Bio';


function Profile (){
  const ProfileStyle = {
    borderBottom: '1px solid grey'

  };
  return (
    <div style={ProfileStyle}>
      <ProfilePic/>
      <ProfileName/>
      <ProfileLinks/>
      <Bio/>
    </div>
  );
}

export default Profile;
