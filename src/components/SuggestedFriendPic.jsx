import React from 'react';
import PropTypes from 'prop-types';

function SuggestedFriendPic(props){
  return(
    <div>
      <img src={props.pic}></img>
    </div>
  );
}

SuggestedFriendPic.propTypes={
  pic: PropTypes.string
};

export default SuggestedFriendPic;
