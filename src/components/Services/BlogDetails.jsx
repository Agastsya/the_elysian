import React from 'react';
import data from './BlogData';
import { useParams } from 'react-router-dom';
import { Heading, Box, Text, Stack } from '@chakra-ui/react';

const BlogDetails = () => {
  const params = useParams();
  const currId = parseInt(params.id); // Assuming id is a number in your data

  // Find the blog with the current ID
  const currentBlog = data.find(blog => blog.id === currId);

  return (
    <>
      {currentBlog && (
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
            borderRadius={['0', '10px']}
            bgColor={'whiteAlpha.500'}
            px={('0', '2rem')}
            py={'20'}
            bgGradient="linear(to-l, #20e3b2, #29ffc6)"
          >
            <Heading pb={'20'}>{currentBlog.title}</Heading>
            <Text pb={'10'} style={{ 'line-height': '1.6' }}>
              {currentBlog.content}
            </Text>
            {/* Other components or data display */}
            <Text fontWeight={'bold'}>{currentBlog.author}</Text>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default BlogDetails;
