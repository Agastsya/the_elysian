import { server } from '../../index';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HStack } from '@chakra-ui/react';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import styled from 'styled-components';
import PageState from '../context/PageState';
import PageContext from '../context/PageContext';

const BODY = styled.body`
  background-color: #dcfce7;
  font-family: 'Arbutus Slab', serif;
`;

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const a = useContext(PageContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${server}/products`);
        setProducts(data);
        setLoading(false);
        a.setTotalItems(data);
      } catch (error) {
        console.log('error');
      }
    };
    fetchProducts();
  }, []);
  return (
    <BODY>
      <Container maxW={'container.xl'}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HStack justifyContent={'space-evenly'} wrap={'wrap'}>
              {products.map(i => (
                <ProductCard
                  key={i.key}
                  title={i.title.split('-')[0]}
                  img={i.image}
                  price={i.price}
                  category={i.category}
                  id={i.id}
                  prod={i}
                />
              ))}
            </HStack>
          </>
        )}
      </Container>
    </BODY>
  );
};

export default NewArrivals;
