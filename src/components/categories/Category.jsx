import { server } from '../../index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HStack } from '@chakra-ui/react';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import styled from 'styled-components';

const BODY = styled.body`
  background-color: #dcfce7;
  font-family: 'Arbutus Slab', serif;
`;

const Category = ({ uniqueName }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        console.log(uniqueName);
        const { data } = await axios.get(`${server}/products`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log('error');
      }
    };
    fetchCategoryProducts();
  });
  return (
    <BODY>
      <Container maxW={'container.xl'}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HStack justifyContent={['space-evenly', 'normal']} wrap={'wrap'}>
              {product.map(i =>
                i.category === uniqueName ? (
                  <ProductCard
                    key={i.key}
                    title={i.title.split('-')[0]}
                    img={i.image}
                    price={i.price}
                    category={i.category}
                    id={i.id}
                    prod={i}
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

export default Category;
