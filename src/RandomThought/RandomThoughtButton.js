import React from 'react';
import './RandomThoughtButton.scss';

const RandomThoughtButton = props => {
  return (
    <React.Fragment>
      <button onClick={props.handleClick} className='btn'>
        Get random Donald Thought
      </button>
    </React.Fragment>
  );
};

export default RandomThoughtButton;
