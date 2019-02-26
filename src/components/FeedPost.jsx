import React from 'react';
import PropTypes from 'prop-types';


function FeedPost(props){
  return(
    <div>
      <p>{props.post}</p>
    </div>
  );
}

FeedPost.propTypes = {
  post: PropTypes.string
};

export default FeedPost;
