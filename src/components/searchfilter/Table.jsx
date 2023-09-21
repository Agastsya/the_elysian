import React from 'react';
import './test.css';
import ProductCard from '../ProductCard';

const Table = ({ i, key, id, title, price, image, category }) => {
  return (
    <>
      <ProductCard
        key={id}
        title={title.split('-')[0]}
        img={image}
        price={price}
        category={category}
        id={id}
        prod={i}
      />
    </>
  );
};

export default Table;
