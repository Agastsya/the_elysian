'use client';

import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductCard = ({ img, title, price, category, id }) => {
  return (
    <Center py={12}>
      <Box
        fontFamily={'Nunito'}
        role={'group'}
        p={6}
        w={'290px'}
        h={'390px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        position={'relative'}
        border={'2px solid linear(to-l, #20e3b2, #29ffc6)'}
      >
        <Link to={`/products/${id}`}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              objectFit={'contain'}
              src={img}
              alt="#"
              padding={'20'}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
              noOfLines={3}
            >
              {title}
            </Text>

            <Stack direction={'row'} align={'center'}>
              <Text
                fontWeight={800}
                fontSize={'xl'}
                fontFamily={'Arbutus Slab'}
              >
                ${price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                ${price + 100}
              </Text>
            </Stack>
          </Stack>
        </Link>

        <Button
          onClick={() => toast.success('Item Added To Cart')}
          position={'absolute'}
          bottom={'2'}
          h={'7'}
          w={'60'}
          variant={'solid'}
          bgGradient="linear(to-l, #20e3b2, #29ffc6)"
        >
          {' '}
          Add To Cart
        </Button>
      </Box>
    </Center>
  );
};

export default ProductCard;
