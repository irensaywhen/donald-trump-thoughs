import React from 'react';
import classes from './Description.module.scss';

const Description = () => {
  return (
    <React.Fragment>
      <h1 className={classes.title}>Donald Trump Thoughts</h1>
      <p className={classes.description}>
        Do you want to know what Donald Trump thinks? Interested in getting some
        quotes? Take your chance to get a random thought, or explore by topic.
      </p>
    </React.Fragment>
  );
};

export default Description;
