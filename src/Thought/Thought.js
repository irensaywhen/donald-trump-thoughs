import React from 'react';
import classes from './Thought.module.scss';

const Thought = ({ id, text }) => {
  return <div className={classes.thought}>{text}</div>;
};

export default Thought;
