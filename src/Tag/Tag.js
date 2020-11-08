import React from 'react';
import classes from './Tag.module.scss';

const Tag = ({ value, handleClick }) => {
  return (
    <button
      value={value}
      onClick={() => handleClick(value)}
      className={classes.btn}
    >
      {value}
    </button>
  );
};

export default Tag;
