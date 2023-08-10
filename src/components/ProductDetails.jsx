import { useParams } from 'react-router-dom';
import React from 'react';

const ProductDetails = () => {
  const params = useParams();
  return <div>{params.id}</div>;
};

export default ProductDetails;
