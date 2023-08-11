import { Stack, VStack, Text, Image } from '@chakra-ui/react';
import React from 'react';
import wardrobe from '../assets/wardrobe02.jpeg';
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <>
      <Stack
        bgColor={'green.300'}
        h={['full', '83.1vh']}
        direction={['column', 'row']}
      >
        <Stack
          direction={['column', 'row']}
          w={['100%', '50%']}
          pt={['10', '40']}
        >
          <Stack direction={['column']} padding={['0', '10']} ml={'25'}>
            <Text
              color={'blackAlpha.800'}
              fontSize={'5xl'}
              fontFamily={'Arbutus Slab'}
            >
              Your Summer Wardrobe
            </Text>
            <Text fontSize={'20'} fontFamily={'Arbutus Slab'}>
              Enjoy the feel-good vibes of the season with our modern and
              traditional products
            </Text>
          </Stack>
        </Stack>
        <VStack h={['50vh', 'auto']}>
          <Image src={wardrobe} objectFit={'contain'} h={'83.1vh'} />
        </VStack>
      </Stack>

      <Testimonials />
    </>
  );
};

export default Home;
