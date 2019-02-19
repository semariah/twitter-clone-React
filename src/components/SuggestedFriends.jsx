import React from 'react';
import SuggestedFriendsTitle from './SuggestedFriendsTitle';
import SuggestedFriendUser from './SuggestedFriendUser';


function SuggestedFriends(){
  return(
    <div>
      <SuggestedFriendsTitle/>
      <SuggestedFriendUser/>
      <SuggestedFriendUser/>
      <SuggestedFriendUser/>
    </div>
  );
}

export default SuggestedFriends;
