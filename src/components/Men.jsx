import { server } from '../index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, HStack } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import Loader from './Loader';

const Men = () => {
  const [menClothes, setMenClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMenProducts = async () => {
      try {
        const { data } = await axios.get(`${server}/products`);
        setMenClothes(data);
        setLoading(false);
        console.log(menClothes);
      } catch (error) {
        console.log('error');
      }
    };
    fetchMenProducts();
  }, []);
  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack justifyContent={'space-evenly'} wrap={'wrap'}>
            {menClothes.map(i =>
              i.category === "men's clothing" ? (
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
  );
};

export default Men;
