import React from 'react';
import PropTypes from 'prop-types';


function FeedName(props){
  return(
    <div>
      <h2>{props.name}</h2>
    </div>
  );
}

FeedName.propTypes = {
  name: PropTypes.string
};

export default FeedName;
