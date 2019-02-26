import React from 'react';
import PropTypes from 'prop-types';



function Dress(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h3>{props.size}</h3>
      <h3>{props.color}</h3>
      <hr/>
    </div>
  );
}

Dress.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Dress;
