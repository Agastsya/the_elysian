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
import { useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { apiserver } from '../../index';
import Loader from '../Loader';
import { useNavigate } from 'react-router-dom';
import PageContext from '../context/PageContext';

const BODY = styled.body`
  font-family: 'Nunito', serif;
`;
const LABEL = styled.label`
  justify-content: flex-start;
  font-weight: bold;
`;

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const { setIsAuthenticated, setUser } = useContext(PageContext);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      setLoader(true);
      const { data } = await axios.post(
        `${apiserver}/new`,
        { name, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setLoader(false);
      setIsAuthenticated(true);
      navigate('/');
      localStorage.setItem('authToken', data.token);
      toast.success(data.message);
      setUser(data);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoader(false);
    }
  };

  return (
    <BODY>
      {loader ? (
        <Loader />
      ) : (
        <>
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
                <form onSubmit={submitHandler}>
                  <LABEL>Name</LABEL>
                  <Input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    name="username"
                    bgColor={'white'}
                  />

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
                    mt={'5'}
                    alignContent={'center'}
                    style={{ 'box-shadow': '4px 4px' }}
                    border="2px solid black"
                    borderRadius={['0', '10px']}
                    bgColor={'whiteAlpha.500'}
                    bgGradient="linear(to-l, #20e3b2, #29ffc6)"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
                <Text>
                  Already Registered{' '}
                  <NavLink style={{ color: '#2563eb' }} to={'/login'}>
                    Login
                  </NavLink>
                </Text>
              </VStack>
            </Center>
          </Container>
        </>
      )}
    </BODY>
  );
};

export default Register;
