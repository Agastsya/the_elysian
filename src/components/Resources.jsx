import React from 'react';
import { Box, Container, Heading, Image } from '@chakra-ui/react';
import { Stack, HStack, VStack, Text } from '@chakra-ui/react';

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
      <Box h={['32vh', '90vh']} rounded={'3xl'}>
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
      interval={3000}
      showArrows={true}
      showStatus={true}
      showThumbs={false}
    >
      <Box w={'full'} h={'90vh'}>
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

      <Box w={'full'} h={'90vh'}>
        <NavLink to={'/resources/blogs'}>
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

      <Box w={'full'} h={'90vh'}>
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
