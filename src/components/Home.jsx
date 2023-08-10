import { Stack, VStack, Text, Box, Image } from '@chakra-ui/react';
import React from 'react';
import wardrobe from '../assets/wardrobehome.avif';
import wardrobe02 from '../assets/wardrobe02.jpeg';

const Home = () => {
  return (
    <Stack
      bgColor={'green.300'}
      h={['full', '83.1vh']}
      direction={['column', 'row']}
    >
      <VStack w={['100%', '50%']} pt={['10', '40']}>
        <Box padding={['0', '10']} ml={'30'}>
          <Text color={'blackAlpha.800'} fontSize={'5xl'} fontFamily={'Inter'}>
            Your Summer Wardrobe
          </Text>
          <Text fontSize={'20'}>
            Enjoy the feel-good vibes of the season with our modern and
            traditional products
          </Text>
        </Box>
      </VStack>
      <VStack>
        <Image src={wardrobe02} objectFit={'contain'} h={'83.1vh'} />
      </VStack>
    </Stack>
  );
};

export default Home;
