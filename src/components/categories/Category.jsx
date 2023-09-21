import { server } from '../../index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, HStack } from '@chakra-ui/react';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchFilter from '../searchfilter/SearchFilter';

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

const Category = ({ uniqueName }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
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
            <Link to={'/cart'}>
              <Button {...buttonstyle}> Your Cart</Button>
            </Link>
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
