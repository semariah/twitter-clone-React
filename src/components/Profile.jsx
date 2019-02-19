import React from 'react';
import ProfileLinks from './ProfileLinks';
import ProfileName from './ProfileName';
import ProfilePic from './ProfilePic';


function Profile (){
  const ProfileStyle = {
    borderBottom: "1px solid grey"

  }
  return (
    <div style={ProfileStyle}>
      <ProfilePic/>
      <ProfileName/>
      <ProfileLinks/>
    </div>
  );
}

export default Profile;
