import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { server } from '../index';
import axios from 'axios';
import {
  Stack,
  VStack,
  Text,
  HStack,
  Box,
  Image,
  Button,
} from '@chakra-ui/react';
import '../styles/productdetails.scss';
import PageContext from './context/PageContext';

const buttonstyle = {
  boxShadow: '4px 4px',
  border: '2px solid black',
  borderRadius: ['0', '10px'],
  bgColor: 'whiteAlpha.500',
  mx: 'auto',
  mt: '5',
  mr: '-5',
};

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const { addToCart } = useContext(PageContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${server}/products/${params.id}`);
        setProduct(data);
      } catch (error) {
        console.log('error');
      }
    };
    fetchProducts();
  });
  return (
    <>
      <Link to={'/cart'}>
        <Button
          {...buttonstyle}
          mx={['5', '85vw']}
          bgGradient={'linear(to-l, #20e3b2, #29ffc6)'}
        >
          {' '}
          Your Cart
        </Button>
      </Link>
      <Stack
        direction={['column', 'row']}
        mx={['0', '5rem']}
        height={'100vh'}
        mb={['600px', '0']}
        mt={['5', '20']}
      >
        <VStack
          w={['100vw', '30vw']}
          px={['2', '0']}
          h={'83.1vh'}
          mx={['auto', '0']}
        >
          <Box
            w={('400px', '100%')}
            h={['70vh', '90vh']}
            display={['grid']}
            justifyContent={'center'}
            fontFamily={'Nunito'}
            style={{ 'box-shadow': '10px 10px' }}
            border="2px solid black"
            borderRadius={['0', '10px']}
            bgColor={'whiteAlpha.500'}
            px={('0', '2rem')}
            py={'20'}
            bgGradient="linear(to-l, #20e3b2, #29ffc6)"
          >
            <Image
              w={['60vw', '20vw']}
              h={['40vh', '50vh']}
              bgColor={'white'}
              mt={'8'}
              p={['0', '10']}
              src={product.image}
              border={'1px solid #bbf7d0'}
              borderRadius={'xl'}
              mx={['auto', '0']}
            ></Image>
            <Text
              w={['80vw', '20vw']}
              h={'15vh'}
              fontSize={['md', 'lg']}
              fontWeight={'semibold'}
            >
              {product.title}
            </Text>
          </Box>
        </VStack>
        <VStack w={['100vw', '70vw']} h={['90vh']} pl={['0', '5']}>
          <Box
            w={'100%'}
            h={'100%'}
            py={['10', '20']}
            px={['5', '20']}
            style={{ 'box-shadow': '10px 10px' }}
            border="2px solid black"
            borderRadius={['0', '10px']}
            bgColor={'whiteAlpha.500'}
            bgGradient="linear(to-l, #20e3b2, #29ffc6)"
          >
            <VStack display={'grid'} justifyContent={'flex-start'}>
              <Text fontSize={['xl', '4xl']} fontWeight={'bold'}>
                Product Description
              </Text>
              <Text py={['5', '10']} fontSize={['sm', 'xl']} px={['10', '0']}>
                {product.description}
              </Text>
              <HStack>
                <Text
                  alignContent={'center'}
                  fontSize={['md', '2xl']}
                  fontWeight={['bold']}
                  fontFamily={'Arbutus Slab'}
                >
                  Sale Price : ${product.price}
                </Text>{' '}
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  ${product.price + 100}
                </Text>
                <Text pl={'52'} fontSize={'2xl'} fontWeight={'bold'}></Text>
              </HStack>
              <Button
                {...buttonstyle}
                onClick={() => {
                  addToCart(product);
                }}
                mr={['5', 'auto']}
              >
                Add To Cart
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Stack>
    </>
  );
};

export default ProductDetails;
