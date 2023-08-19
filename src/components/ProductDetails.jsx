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
        mx={'5rem'}
        height={'100vh'}
        mt={'20'}
      >
        <VStack w={'30vw'} h={'83.1vh'}>
          <Box
            w={'100%'}
            h={'90%'}
            display={'grid'}
            justifyContent={'center'}
            border={'3px solid #86efac'}
            borderRadius={'3xl'}
            fontFamily={'Nunito'}
            bgColor={'#bbf7d0'}
          >
            <Image
              w={'20vw'}
              h={'50vh'}
              bgColor={'white'}
              mt={'8'}
              p={'10'}
              src={product.image}
              border={'1px solid #bbf7d0'}
              borderRadius={'xl'}
            ></Image>
            <Text w={'20vw'} h={'15vh'} fontSize={'lg'} fontWeight={'semibold'}>
              {product.title}
            </Text>
          </Box>
        </VStack>
        <VStack w={'70vw'} h={'90vh'} pl={'5'}>
          <Box
            w={'100%'}
            h={'100%'}
            py={'20'}
            px={'20'}
            border={'2px solid #86efac'}
            borderRadius={'3xl'}
            bgColor={'#bbf7d0'}
          >
            <VStack display={'grid'} justifyContent={'flex-start'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                Product Description
              </Text>
              <Text py={'10'} fontSize={'xl'}>
                {product.description}
              </Text>
              <HStack>
                <Text
                  alignContent={'center'}
                  fontSize={'2xl'}
                  fontWeight={'bold'}
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
