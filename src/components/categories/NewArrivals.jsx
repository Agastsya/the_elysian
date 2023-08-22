import { server } from '../../index';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HStack, Button } from '@chakra-ui/react';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import styled from 'styled-components';
import PageContext from '../context/PageContext';
import { Link } from 'react-router-dom';

const BODY = styled.body`
  background-color: #dcfce7;
  font-family: 'Arbutus Slab', serif;
`;
const buttonstyle = {
  boxShadow: '4px 4px',
  border: '2px solid black',
  borderRadius: ['0', '10px'],
  bgColor: 'whiteAlpha.500',
  bgGradient: 'linear(to-l, #20e3b2, #29ffc6)',
  mx: 'auto',
  mt: '5',
};

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
            {' '}
            <Link to={'/cart'}>
              <Button {...buttonstyle}> Your Cart</Button>
            </Link>
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
