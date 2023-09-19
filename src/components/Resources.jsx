import React from 'react';
import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import astronaut from '../assets/astronaut.jpg';
import samurai from '../assets/samurai.png';
import tokyomansion from '../assets/tokyomansion.jpg';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BODY = styled.body`
  background-color: #dcfce7;
  font-family: 'Arbutus Slab', serif;
`;

const headingOptions = {
  pos: 'absolute',
  top: ['30%', '50%'],
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  width: '25rem',
};

const Resources = () => {
  return (
    <BODY>
      <Box display={'grid'} justifyContent={'center'}>
        <Text fontSize={'5xl'} fontFamily={'Nunito'} fontWeight={'bold'}>
          OTHER RESOURCES
        </Text>
      </Box>
      <Center
        px={'20'}
        display={'flex'}
        justifyContent={'space-evenly'}
        h={'20'}
        bgColor={'green.100'}
      >
        <Box h={'full'} w={'full'}>
          <NavLink to={'/resources/faq'} h={'20'} w={'20'}>
            <Center h={'full'} _hover={{ color: 'white', bg: 'green.700' }}>
              FAQ
            </Center>
          </NavLink>
        </Box>
        <Box h={'full'} w={'full'}>
          <NavLink to={'/resources/blog'} h={'20'} w={'20'}>
            <Center h={'full'} _hover={{ color: 'white', bg: 'green.700' }}>
              Blogs
            </Center>
          </NavLink>
        </Box>
        <Box h={'full'} w={'full'}>
          <NavLink to={'/resources/support'} h={'20'} w={'20'}>
            <Center h={'full'} _hover={{ color: 'white', bg: 'green.700' }}>
              Support
            </Center>
          </NavLink>
        </Box>
      </Center>
      <Box h={['32vh', 'full']} rounded={'3xl'}>
        <MyCarousel />
      </Box>
    </BODY>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box h={'40vh'}>
        <NavLink to={'/resources/faq'}>
          <Image src={astronaut} />
          <Heading
            color={'blackAlpha.900'}
            bgColor={'whiteAlpha.900'}
            {...headingOptions}
          >
            FAQ
          </Heading>
        </NavLink>
      </Box>

      <Box h={'40vh'}>
        <NavLink to={'/resources/blog'}>
          <Image src={samurai} />
          <Heading
            color={'black'}
            bgColor={'whiteAlpha.900'}
            {...headingOptions}
          >
            Blogs
          </Heading>
        </NavLink>
      </Box>

      <Box h={'40vh'}>
        <NavLink to={'/resources/support'}>
          <Image src={tokyomansion} />
          <Heading
            color={'black'}
            bgColor={'whiteAlpha.900'}
            {...headingOptions}
          >
            Support
          </Heading>
        </NavLink>
      </Box>
    </Carousel>
  );
};

export default Resources;
