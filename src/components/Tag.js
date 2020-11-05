import React from 'react';

const Tag = ({ value, handleClick }) => {
  return (
    <button value={value} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Tag;
