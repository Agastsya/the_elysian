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
  font-family: 'Arbutus Slab', serif;
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
        bgColor={'green.300'}
        rounded={['auto', '3xl']}
        my={['0', '20']}
        h={'100vh'}
        display={'flex'}
        alignItems={'center'}
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
          <Button w={'80'} alignContent={'center'}>
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
