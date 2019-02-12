import React from 'react';
import FeedName from './FeedName';
import FeedPost from './FeedPost';
import FeedPic from './FeedPic'

function FeedContent(){
  return(
    <div>
      <FeedName/>
      <FeedPic/>
      <FeedPost/>
    </div>
  );
}

export default FeedContent;
