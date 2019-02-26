import React from 'react';
import FeedName from './FeedName';
import FeedPost from './FeedPost';
import FeedPic from './FeedPic';

function FeedContent(){
  return(
    <div>
      <div>
        <FeedName
          name="Elham"/>
        <FeedPic
          image="https://www.google.com/search?q=google+minimalist+photos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjlwZfz8c3gAhWnhlQKHcoMAQgQ_AUIDigB&biw=1440&bih=634#imgrc=buB8DrH_7W1PfM:"/>
        <FeedPost
          post="Hello, today is monday and happy monday y'all!"/>
      </div>
      <div>
        <FeedName
          name="SSmhar"/>
        <FeedPic
          image="https://www.google.com/search?q=google+minimalist+photos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjlwZfz8c3gAhWnhlQKHcoMAQgQ_AUIDigB&biw=1440&bih=634#imgrc=buB8DrH_7W1PfM:"/>
        <FeedPost
          post="HAppy tuesday all"/>
      </div>
      <div>
        <FeedName
          name="Janet"/>
        <FeedPic
          image="https://www.google.com/search?q=google+minimalist+photos&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjlwZfz8c3gAhWnhlQKHcoMAQgQ_AUIDigB&biw=1440&bih=634#imgrc=buB8DrH_7W1PfM:"/>
        <FeedPost
          post="I am a buisnness woman!"/>
      </div>
    </div>

  );
}

export default FeedContent;
