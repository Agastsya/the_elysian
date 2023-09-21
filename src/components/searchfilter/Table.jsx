import React from 'react';
import './test.css';
import { Text } from '@chakra-ui/react';
import ProductCard from '../ProductCard';

const Table = ({ id, title, price, image, category }) => {
  return (
    <>
      <ProductCard
        key={id}
        title={title.split('-')[0]}
        img={image}
        price={price}
        category={category}
        id={id}
      />
    </>
  );
};

export default Table;
