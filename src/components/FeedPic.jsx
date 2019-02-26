import React from 'react';
import PropTypes from 'prop-types';


function FeedPic(props){
  return(
    <div>
      <img src={props.image}></img>
    </div>
  );

}

FeedPic.propTypes = {
  image: PropTypes.string
};

export default FeedPic;
