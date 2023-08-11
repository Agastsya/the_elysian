import React from 'react';
import {
  Stack,
  Text,
  HStack,
  VStack,
  Center,
  Heading,
  Input,
  Button,
} from '@chakra-ui/react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BODY = styled.body`
  font-family: 'Arbutus Slab', serif;
`;

const Footer = () => {
  return (
    <BODY>
      <Stack
        direction={['column', 'row']}
        h={['full', '30vh']}
        bgColor={'green.300'}
      >
        <VStack w={['100%', '70%']} px={['12', '20']}>
          <Text fontSize={'3xl'} fontWeight={'bold'}>
            thelysian
          </Text>
          <Text bgColor={'whiteAlpha.900'} rounded={'3xl'} py={'2'} px={'2'}>
            "Discover Elegance, Discover The Lysian. Elevate Your Everyday Look
            with Our Handpicked Collections. Shop Now and Experience the
            Difference."
          </Text>
          <HStack>
            {' '}
            <Input
              bgColor={'white'}
              w={'100%'}
              borderColor={'green.300'}
            ></Input>
            <Button variant={'solid'} type="email" boxDecorationBreak={'unset'}>
              Subscribe
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={['full', '30%']}
          borderLeft={['none', '3px solid black']}
          color={'blackAlpha.900'}
          pt={'16'}
          pb={['4', '0']}
        >
          <Heading fontFamily={'Arbutus Slab'}>Follow us</Heading>
          <HStack>
            <FiInstagram size={'30'} />
            <FiFacebook size={'30'} />
            <FiTwitter size={'30'} />
          </HStack>
        </VStack>
      </Stack>
    </BODY>
  );
};

export default Footer;
