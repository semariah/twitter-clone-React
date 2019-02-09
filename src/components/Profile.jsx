import React from 'react';
import ProfileLinks from './ProfileLinks';
import ProfileName from './ProfileName';
import ProfilePic from './ProfilePic';


function Profile (){
  return (
    <div>
      <ProfilePic/>
      <ProfileName/>
      <ProfileLinks/>
    </div>
  );
}

export default Profile;
