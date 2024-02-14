import React, { useEffect } from 'react';
import { useContext } from 'react';
import PageContext from './context/PageContext';
import {
  Box,
  Stack,
  Text,
  VStack,
  HStack,
  Image,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const buttonstyle = {
  style: {
    boxShadow: '4px 4px',
    border: '2px solid black',
    borderRadius: ['0', '10px'],
    bgColor: 'whiteAlpha.500',
    bgGradient: 'linear(to-l, #20e3b2, #29ffc6)',
    mb: '20',
    mx: '28',
    mt: '20',
  },
};

const Cart = () => {
  const navigate = useNavigate();

  const {
    addToCart,
    removeCartItem,
    cartItems,
    reduceCart,
    emptyCart,
    TotalPrice,
    isAuthenticated,
  } = useContext(PageContext);

  const total = TotalPrice();
  const originalPrice = total + 100;
  useEffect(() => {
    !isAuthenticated
      ? navigate('/cart')
      : toast.error('Login or Register to view cart') && navigate('/login');
  });

  return (
    <>
      <Stack direction={'column'} minH={'100vh'}>
        {cartItems.length === 0 ? (
          <Text
            mx={'auto'}
            fontSize={'4xl'}
            bgGradient="linear(to-l, #20e3b2, #29ffc6)"
            w={['100vw', '100vw']}
            textAlign={'center'}
            h={['100vh', '100vh']}
            fontFamily={'Arbutus Slab'}
            verticalAlign={'middle'}
            lineHeight={'100vh'}
          >
            Cart Is Empty
          </Text>
        ) : (
          <>
            <Button {...buttonstyle} w={'fit-content'} mx={'auto'} mt={'5'}>
              Checkout Now
            </Button>
            {cartItems.map(item => (
              <VStack w={'full'}>
                <Box
                  w={'80vw'}
                  h={'fit-content'}
                  my={'10'}
                  style={{ 'box-shadow': '10px 10px' }}
                  border="2px solid black"
                  borderRadius={['0', '10px']}
                  bgColor={'whiteAlpha.500'}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  px={['3', '20']}
                  bgGradient="linear(to-l, #20e3b2, #29ffc6)"
                >
                  <HStack>
                    <VStack w={'40%'}>
                      <Text fontWeight={'semibold'}>{item.title}</Text>

                      <Image
                        w={'32'}
                        src={item.image}
                        style={{ 'box-shadow': '5px 5px' }}
                        border="2px solid black"
                        mb={'5'}
                      />
                      <Text fontWeight={'bold'} fontSize={'2xl'}>
                        ${item.price}
                      </Text>
                    </VStack>
                    <VStack w={'30%'}>
                      <Button
                        {...buttonstyle}
                        w={'10'}
                        my={'5'}
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>
                      <Text>{item.quantity}</Text>
                      <Button
                        {...buttonstyle}
                        w={'10'}
                        onClick={() => reduceCart(item)}
                      >
                        -
                      </Button>
                    </VStack>
                    <VStack w={'30%'}>
                      <Button
                        {...buttonstyle}
                        borderRadius={'full'}
                        onClick={() => removeCartItem(item.id)}
                      >
                        X
                      </Button>
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
            ))}

            <Button
              {...buttonstyle}
              w={'fit-content'}
              mx={'auto'}
              mb={'5'}
              onClick={() => {
                emptyCart();
              }}
            >
              Remove All From Cart
            </Button>
            <Box
              w={'full'}
              h={'20vh'}
              display={'flex'}
              flexDirection={'column'}
              style={{ 'box-shadow': '10px 10px' }}
              mb={'10'}
              border="2px solid black"
              borderRadius={['0', '10px']}
              bgColor={'whiteAlpha.500'}
              px={('0', '2rem')}
              py={'30'}
              bgGradient="linear(to-l, #20e3b2, #29ffc6)"
            >
              <Text mx={'auto'} fontSize={'3xl'} fontWeight={'semibold'}>
                Shipping Price : ${originalPrice.toFixed(2)}
              </Text>
              <Text mx={'auto'} fontSize={'3xl'} fontWeight={'semibold'}>
                Final Amount : ${total.toFixed(2)}
              </Text>
            </Box>
          </>
        )}
      </Stack>
    </>
  );
};

export default Cart;
