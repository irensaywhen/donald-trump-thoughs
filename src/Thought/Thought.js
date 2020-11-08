import React from 'react';
import classes from './Thought.module.scss';

const Thought = ({ id, text }) => {
  return <blockquote className={classes.thought}>{text}</blockquote>;
};

export default Thought;
