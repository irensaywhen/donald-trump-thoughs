import React from 'react';

const RandomThoughtButton = props => {
  return (
    <React.Fragment>
      <button onClick={props.handleClick}>Get random Donald Thought</button>
    </React.Fragment>
  );
};

export default RandomThoughtButton;
