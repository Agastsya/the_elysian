import React, { useState } from 'react';
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
import axios from 'axios';
import { apiserver } from '../..';
import toast from 'react-hot-toast';

const BODY = styled.body`
  font-family: 'Nunito', serif;
`;
const LABEL = styled.label`
  justify-content: flex-start;
  font-weight: bold;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async e => {
    try {
      e.preventDefault();
      const { data } = await axios.post(
        `${apiserver}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

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
          <form onSubmit={submitHandler}>
            <LABEL>Email</LABEL>
            <Input
              type="email"
              bgColor={'white'}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <LABEL>Password</LABEL>
            <Input
              type="password"
              bgColor={'white'}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              w={'80'}
              alignContent={'center'}
              style={{ 'box-shadow': '4px 4px' }}
              border="2px solid black"
              borderRadius={['0', '10px']}
              bgColor={'whiteAlpha.500'}
              bgGradient="linear(to-l, #20e3b2, #29ffc6)"
              type="submit"
            >
              Log In
            </Button>
          </form>
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
