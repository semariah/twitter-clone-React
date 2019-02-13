import React from 'react';
import SuggestedFriendName from './SuggestedFriendName';
import SuggestedFriendPic from './SuggestedFriendPic';
import SuggestedFriendButton from './SuggestedFriendButton';

function SuggestedFriendUser(){
  return(
    <div>
      <SuggestedFriendName/>
      <SuggestedFriendPic/>
      <SuggestedFriendButton/>
    </div>
  );
}

export default SuggestedFriendUser;
