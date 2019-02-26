import React from 'react';
import PropTypes from 'prop-types';

function SuggestedFriendName(props){
  return(
    <div>
      <h3>{props.name}</h3>
    </div>
  );
}

SuggestedFriendName.propTypes = {
  name: PropTypes.String
};

export default SuggestedFriendName;
