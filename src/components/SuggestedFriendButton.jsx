import React from 'react';
import PropTypes from 'prop-types';

function SuggestedFriendButton(props){
  return (
    <div>
      <button>{props.button}</button>
    </div>
  );
}

SuggestedFriendButton.propTypes = {
  button: PropTypes.String
};

export default SuggestedFriendButton;
