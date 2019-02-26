import React from 'react';


function FeedInput(){
  const FeedStyle = {
    display: 'flex',
    justifyContent: 'space-bewteen',
    borderBottom: '1px solid grey',
    //alignItems: "center"
  };
  return(
    <div style={FeedStyle}>
      <img src="https://www.unsplash.com"></img>
      <h3>What's Happening?</h3>
    </div>
  );
}

export default FeedInput;
