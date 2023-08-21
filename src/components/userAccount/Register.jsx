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

const BODY = styled.body`
  font-family: 'Nunito', serif;
`;
const LABEL = styled.label`
  justify-content: flex-start;
  font-weight: bold;
`;

const Register = () => {
  return (
    <BODY>
      <Container
        maxH={'container.xl'}
        style={{ 'box-shadow': '10px 10px' }}
        border="2px solid black"
        borderRadius={['0', '10px']}
        bgColor={'whiteAlpha.500'}
        px={('0', '2rem')}
        py={'20'}
        bgGradient="linear(to-l, #20e3b2, #29ffc6)"
        rounded={['auto', '3xl']}
        my={['0', '20']}
      >
        <Center>
          <VStack pt={'10'} alignItems={'flex-start'} w={'80'}>
            {' '}
            <Heading pb={'10'} pt={'10'} mx={'auto'}>
              Register
            </Heading>
            <LABEL>Name</LABEL>
            <Input type="name" name="username" bgColor={'white'} />
            <LABEL>Mobile Number</LABEL>
            <Input type="number" bgColor={'white'} />
            <LABEL>Email</LABEL>
            <Input type="email" bgColor={'white'} />
            <LABEL>Password</LABEL>
            <Input type="password" bgColor={'white'} />
            <Button w={'80'} mt={'5'} alignContent={'center'}>
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
