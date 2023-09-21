import React from 'react';
import './test.css';

const Table = ({ id, title, price, newvalue }) => {
  return (
    <>
      <h1 class="tablestyles" className="title">
        {title}
      </h1>
    </>
  );
};

export default Table;
