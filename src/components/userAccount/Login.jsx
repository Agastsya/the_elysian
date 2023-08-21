import React from 'react';
import {
  VStack,
  Container,
  Input,
  Button,
  Text,
  Heading,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const BODY = styled.body`
  font-family: 'Nunito', serif;
`;
const LABEL = styled.label`
  justify-content: flex-start;
  font-weight: bold;
`;

const Login = () => {
  return (
    <BODY>
      <Container
        maxH={'container.xl'}
        rounded={['auto', '3xl']}
        my={['0', '20']}
        h={'100vh'}
        display={'flex'}
        alignItems={'center'}
        style={{ 'box-shadow': '10px 10px' }}
        border="2px solid black"
        borderRadius={['0', '10px']}
        bgColor={'whiteAlpha.500'}
        px={('0', '2rem')}
        py={'20'}
        bgGradient="linear(to-l, #20e3b2, #29ffc6)"
      >
        <VStack pt={'10'} alignItems={'flex-start'} w={'80'} mx={'auto'}>
          {' '}
          <Heading pb={'10'} pt={'10'}>
            Login
          </Heading>
          <LABEL>Email</LABEL>
          <Input type="email" bgColor={'white'} />
          <LABEL>Password</LABEL>
          <Input type="password" bgColor={'white'} />
          <Button
            w={'80'}
            alignContent={'center'}
            style={{ 'box-shadow': '4px 4px' }}
            border="2px solid black"
            borderRadius={['0', '10px']}
            bgColor={'whiteAlpha.500'}
            bgGradient="linear(to-l, #20e3b2, #29ffc6)"
          >
            Log In
          </Button>
          <Text>
            New Here{' '}
            <NavLink style={{ color: '#2563eb' }} to={'/register'}>
              Register
            </NavLink>
          </Text>
        </VStack>
      </Container>
    </BODY>
  );
};

export default Login;
