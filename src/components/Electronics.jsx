import { server } from '../index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HStack } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import Loader from './Loader';
import styled from 'styled-components';

const BODY = styled.body`
  background-color: #dcfce7;
  font-family: 'Arbutus Slab', serif;
`;

const Electronics = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const { data } = await axios.get(`${server}/products`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log('error');
      }
    };
    fetchMenProducts();
  }, []);
  return (
    <BODY>
      <Container maxW={'container.xl'}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HStack wrap={'wrap'}>
              {product.map(i =>
                i.category === 'electronics' ? (
                  <ProductCard
                    key={i.key}
                    title={i.title.split('-')[0]}
                    img={i.image}
                    price={i.price}
                    category={i.category}
                  />
                ) : (
                  console.log('didnt load')
                )
              )}
            </HStack>
          </>
        )}
      </Container>
    </BODY>
  );
};

export default Electronics;
