import React from 'react';

const RandomThoughtButton = props => {
  return (
    <React.Fragment>
      <button onClick={props.handleClickOnRandomThoughtButton}>
        Get random Donald Thought
      </button>
    </React.Fragment>
  );
};

export default RandomThoughtButton;
