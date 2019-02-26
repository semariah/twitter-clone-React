import React from 'react';
import SuggestedFriendName from './SuggestedFriendName';
import SuggestedFriendPic from './SuggestedFriendPic';
import SuggestedFriendButton from './SuggestedFriendButton';

function SuggestedFriendUser(){
  const SugStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const SugStyle2 = {
    padding: '10px',
    textAlign: 'center'
  };
  return(
    <div style={SugStyle}>
      <SuggestedFriendPic
        pic="https://www.google.com/search?q=google+minimalist+photos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjlwZfz8c3gAhWnhlQKHcoMAQgQ_AUIDigB&biw=1440&bih=634#imgrc=ctKwGjalfgCLbM"/>
      <div style={SugStyle2}>
        <SuggestedFriendName
          name="Ariam"/>
        <SuggestedFriendButton
          button="Button"/>
      </div>
    </div>

  );
}

export default SuggestedFriendUser;
