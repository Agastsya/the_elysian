import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${server}/products/${params.id}`);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log('error');
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Stack
        direction={['column', 'row']}
        mx={['0', '5rem']}
        height={'100vh'}
        mb={['600px', '0']}
        mt={['5', '20']}
        fontFamily={'Nunito'}
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
            border={'1px solid #f0fdf4'}
            borderRadius={['none', '3xl']}
          >
            <Image
              w={['60vw', '20vw']}
              h={['40vh', '50vh']}
              bgColor={'white'}
              mt={'8'}
              p={['0', '10']}
              src={product.image}
              border={'2px solid #15803d'}
              shadow={'dark-lg'}
              borderRadius={'xl'}
              mx={['auto', '0']}
            ></Image>
          </Box>
        </VStack>
        <VStack w={['100vw', '70vw']} h={['90vh']} pl={['0', '5']}>
          <Box
            w={'100%'}
            h={'100%'}
            py={['10', '20']}
            mt={['-32', '0']}
            px={['5', '20']}
            bgColor={'#68D391'}
          >
            <VStack display={'grid'} justifyContent={'flex-start'}>
              <Text
                w={['80vw', '20vw']}
                h={'15vh'}
                fontSize={['md', '2xl']}
                fontWeight={'bold'}
                pb={'56'}
              >
                {product.title}
              </Text>
              <Text fontSize={['xl', 'xl']} fontWeight={'bold'}>
                Product Description
              </Text>
              <Text py={['5', '0']} fontSize={['sm', 'xl']} px={['10', '0']}>
                {product.description}
              </Text>
              <HStack>
                <Text
                  alignContent={'center'}
                  fontSize={['md', '2xl']}
                  fontWeight={['bold']}
                >
                  Sale Price : ${product.price}
                </Text>{' '}
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  ${product.price + 100}
                </Text>
                <Text pl={'52'} fontSize={'2xl'} fontWeight={'bold'}></Text>
              </HStack>
              <Button
                bgColor={'#234E52'}
                mt={'16'}
                w={['auto', '80']}
                mx={'5'}
                color={'white'}
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
