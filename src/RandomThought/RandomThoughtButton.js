import React from 'react';
import classes from './RandomThoughtButton.module.scss';

const RandomThoughtButton = props => {
  return (
    <React.Fragment>
      <button onClick={props.handleClick} className={classes.btn}>
        Get random Donald Thought
      </button>
    </React.Fragment>
  );
};

export default RandomThoughtButton;
