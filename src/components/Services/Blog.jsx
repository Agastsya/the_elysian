import { Box, Center, Text, Heading, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import data from './BlogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <Box maxW={'100vw'}>
      <Box w={'100vw'} h={'40vh'} bgGradient="linear(to-l, #20e3b2, #29ffc6)">
        <Center w={'100vw'} h={'40vh'} borderRadius={'3xl'}>
          <Text
            fontSize={'4xl'}
            fontWeight={'extrabold'}
            pt={['10', '6']}
            zIndex={'1'}
            style={{ 'box-shadow': '10px 10px' }}
            border="2px solid black"
            borderRadius={'10px'}
            bgColor={'whiteAlpha.500'}
            px={'2rem'}
          >
            Blogs
          </Text>
        </Center>
      </Box>
      {data.map(i => (
        <Stack w={'100vw'} direction={'column'} justifyContent={'space-around'}>
          <Box
            my={'20'}
            mx={['0', '20']}
            maxH={['full', 'full']}
            maxW={'100vw'}
            fontSize={'2xl'}
            display={'flex'}
            flexDirection={'column'}
            style={{ 'box-shadow': '10px 10px' }}
            border="2px solid black"
            borderRadius={'10px'}
            bgColor={'whiteAlpha.500'}
            px={'2rem'}
            bgGradient="linear(to-l, #20e3b2, #29ffc6)"
          >
            <Heading pb={'20'}>{i.title}</Heading>
            <Text noOfLines={'5'}>{i.content}</Text>
            <Text fontWeight={'bold'} pt={'10'}>
              Written By {i.author}
            </Text>
            <Link to={`/resources/blog/${i.id}`}>
              <Button
                w={'40'}
                style={{ 'box-shadow': '10px 10px' }}
                border="2px solid black"
                borderRadius={'10px'}
                bgGradient="linear(to-l, #20e3b2, #29ffc6)"
                my={'20'}
              >
                Read Full
              </Button>
            </Link>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default Blog;
