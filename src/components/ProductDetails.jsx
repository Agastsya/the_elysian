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
            border={'3px solid #86efac'}
            borderRadius={['none', '3xl']}
            fontFamily={'Nunito'}
            bgColor={'#bbf7d0'}
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
            border={'2px solid #86efac'}
            borderRadius={['none', '3xl']}
            bgColor={'#bbf7d0'}
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
                >
                  Sale Price : ${product.price}
                </Text>{' '}
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  ${product.price + 100}
                </Text>
                <Text pl={'52'} fontSize={'2xl'} fontWeight={'bold'}></Text>
              </HStack>
              <Button bgColor={'#10b981'} mt={'28'} mx={'5'}>
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
