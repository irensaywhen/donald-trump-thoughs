import React from 'react';
import classes from './ViewMoreTopicsBtn.module.scss';

const ViewMoreTopicsBtn = ({ onClickHandler, isTopicsShown }) => {
  const btnText = isTopicsShown ? 'View less' : 'View more';
  return (
    <React.Fragment>
      <button className={classes.btn} onClick={onClickHandler}>
        {btnText}
      </button>
    </React.Fragment>
  );
};

export default ViewMoreTopicsBtn;
