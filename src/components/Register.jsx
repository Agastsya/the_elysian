import React from 'react';
import {
  VStack,
  Container,
  Input,
  Button,
  Center,
  Text,
  Heading,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BODY = styled.body`
  font-family: 'Arbutus Slab', serif;
`;
const LABEL = styled.label`
  justify-content: flex-start;
`;

const Register = () => {
  return (
    <BODY>
      <Container maxH={'container.xl'} h={'90vh'}>
        <Center>
          <VStack pt={'10'} alignItems={'flex-start'} w={'80'}>
            {' '}
            <Heading pb={'10'} pt={'10'}>
              Register
            </Heading>
            <LABEL>Name</LABEL>
            <Input type="name" />
            <label>Mobile Number</label>
            <Input type="number" />
            <label>Email</label>
            <Input type="email" />
            <label>Password</label>
            <Input type="password" />
            <Button w={'80'} alignContent={'center'}>
              Sign Up
            </Button>
            <Text>
              Already Registered{' '}
              <NavLink style={{ color: '#2563eb' }} to={'/login'}>
                Login
              </NavLink>
            </Text>
          </VStack>
        </Center>
      </Container>
    </BODY>
  );
};

export default Register;
