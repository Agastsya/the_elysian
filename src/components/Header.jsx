import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiMapPin } from 'react-icons/fi';
import {
  Text,
  Avatar,
  HStack,
  VStack,
  Box,
  Center,
  Button,
  Icon,
} from '@chakra-ui/react';
import styled from 'styled-components';
import '../styles/Header.scss';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { RiAccountPinBoxFill } from 'react-icons/ri';

import CartIcon from '../assets/svg/CartIcon';
import { useContext } from 'react';
import PageContext from './context/PageContext';

import toast from 'react-hot-toast';

const BODY = styled.body`
  background-color: #dcfce7;
  font-family: 'Arbutus Slab', serif;
`;

const HoverableH1 = styled.h1`
  &:hover {
    color: #16a34a;
    display: block;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useContext(PageContext);

  const logouthandler = async () => {
    try {
      localStorage.removeItem('authToken');
    } catch (error) {}

    navigate('/login');
    toast.success('Logged out successfully');
  };

  const handleButtonClick = () => {
    navigate('/tester');
  };
  return (
    <BODY style={{ position: 'relative' }}>
      <Center
        maxW={'100vw'}
        color={'black'}
        bgGradient="linear(to-l, #20e3b2, #29ffc6)"
      >
        <Link to={'/newarrivals'} fontFamily={'Inter'}>
          Check Out New Products
        </Link>
      </Center>
      <HStack
        justifyContent={'space-between'}
        maxW={'100vw'}
        overflowX={['scroll', 'auto']}
        overflowY={['hidden', 'hidden']}
        h={'16'}
      >
        <Link to={'/'}>
          <Text
            pl={'1vh'}
            pr={'2vh'}
            align={'left'}
            fontWeight={'bold'}
            fontFamily={'Arbutus Slab'}
            fontSize={'2xl'}
          >
            <HoverableH1>thelysian</HoverableH1>
          </Text>
        </Link>
        <HStack>
          <Button
            w={{ base: '5vw', md: '40vw' }}
            fontSize={{ base: '10px', md: 'md' }}
            backgroundColor={'green.200'}
            _hover={{ backgroundColor: 'green.500' }}
            onClick={handleButtonClick}
          >
            <Icon as={FaSearch} mr={{ base: 0, md: 2 }} />
            <Box display={{ base: 'none', md: 'block' }}>
              Search for products here
            </Box>
          </Button>
        </HStack>

        <HStack>
          <HStack
            gap={'6vw'}
            mr={'2vw'}
            display={{ base: 'block', md: 'none' }}
          >
            <Link to={'/resources'}>
              <FiShoppingBag size={'27'} />
            </Link>
            <Link to={'/findus'}>
              <FaMapMarkedAlt size={'27'} />
            </Link>
            <Link to={'/login'}>
              <RiAccountPinBoxFill size={'27'} />
            </Link>
            <Link to={'/cart'}>
              <CartIcon />
            </Link>
          </HStack>

          <Link to={'/resources'}>
            <FiShoppingBag size={'27'} />
          </Link>
          <Box
            w={'20'}
            mr={['8', '10']}
            display={{ base: 'none', md: 'block' }}
          >
            <Link to={'/resources'}>
              <HStack>
                <VStack>
                  <Text
                    fontSize={'smaller'}
                    fontWeight={'bold'}
                    justifyContent={'flex-start'}
                    alignSelf={'flex-start'}
                  >
                    <HoverableH1>Resources</HoverableH1>
                  </Text>
                  <Text
                    fontSize={'small'}
                    font
                    as={'i'}
                    color={'gray'}
                    mt={'-1.5vh'}
                  >
                    <NavLink to={'/resources/faq'} className="nav_link">
                      FAQ,
                    </NavLink>
                    <NavLink to={'/resources/blog'} className="nav_link">
                      Blog,
                    </NavLink>
                    <NavLink to={'/resources/support'} className="nav_link">
                      Support
                    </NavLink>
                  </Text>
                </VStack>
              </HStack>
            </Link>
          </Box>

          <Box
            w={['40', '25']}
            mr={['-10', '10']}
            display={{ base: 'none', md: 'block' }}
          >
            <Link to={'/findus'}>
              <HStack>
                <FiMapPin size={'27'} />
                <VStack>
                  <Text
                    fontSize={'smaller'}
                    fontWeight={'bold'}
                    justifyContent={'flex-start'}
                    alignSelf={'flex-start'}
                  >
                    <HoverableH1>Find Us</HoverableH1>
                  </Text>
                  <Text
                    fontSize={'small'}
                    font
                    as={'i'}
                    color={'gray'}
                    mt={'-1.5vh'}
                  >
                    <NavLink to={'/findus'} className="nav_link">
                      Store Locator
                    </NavLink>{' '}
                  </Text>
                </VStack>
              </HStack>
            </Link>
          </Box>

          <Box
            w={'20'}
            mr={['16', '24']}
            display={{ base: 'none', md: 'block' }}
          >
            <Link to={'/login'}>
              <HStack>
                <Avatar name="Agastsya Joshi" />
                <VStack>
                  <Text
                    fontSize={'smaller'}
                    fontWeight={'bold'}
                    justifyContent={'flex-start'}
                    alignSelf={'flex-start'}
                  >
                    <HoverableH1>
                      {isAuthenticated ? (
                        <Text>{user?.name}</Text>
                      ) : (
                        <Text>Sign In</Text>
                      )}
                    </HoverableH1>
                  </Text>
                  <Text
                    fontSize={'small'}
                    font
                    as={'i'}
                    color={'gray'}
                    mt={'-1.5vh'}
                    className="nav_link"
                  >
                    <NavLink to={'/login'} className="nav_link">
                      {isAuthenticated ? (
                        <Link onClick={logouthandler}>
                          <Text>Logout</Text>
                        </Link>
                      ) : (
                        <Text>Sign In</Text>
                      )}
                    </NavLink>{' '}
                  </Text>
                </VStack>
              </HStack>
            </Link>
          </Box>

          <Box w={'20'} mr={['5', '5']} display={{ base: 'none', md: 'block' }}>
            <Link to={'/cart'}>
              <HStack>
                <Text
                  fontSize={'small'}
                  font
                  as={'i'}
                  color={'gray'}
                  mt={'-1.5vh'}
                  className="nav_link"
                >
                  <CartIcon />
                </Text>
                <Text
                  fontSize={'smaller'}
                  fontWeight={'bold'}
                  justifyContent={'flex-start'}
                  alignSelf={'flex-start'}
                >
                  <HoverableH1>Cart</HoverableH1>
                </Text>
              </HStack>
            </Link>
          </Box>
        </HStack>
      </HStack>
      <Center
        bgColor={'#EDF2F7'}
        mt={'2'}
        h={'30'}
        fontSize={['sm', 'md']}
        gap={['3', '0']}
        fontFamily={'Arbutus Slab'}
      >
        <Box h={'full'} w={['auto', 'full']}>
          <Link to={'/newarrivals'} h={'20'} w={'20'}>
            <Center h={'full'} _hover={{ color: 'white', bg: 'green.700' }}>
              New Arrivals
            </Center>
          </Link>
        </Box>
        <Box h={'full'} w={['auto', 'full']}>
          <Link to={'/men'} h={'20'} w={'20'}>
            <Center h={'full'} _hover={{ color: 'white', bg: 'green.700' }}>
              Men
            </Center>
          </Link>
        </Box>
        <Box h={'full'} w={['auto', 'full']}>
          <Link to={'/women'} h={'20'} w={'20'}>
            <Center h={'full'} _hover={{ color: 'white', bg: 'green.700' }}>
              Women
            </Center>
          </Link>
        </Box>
        <Box h={'full'} w={['auto', 'full']}>
          <Link to={'/jewelery'} h={'20'} w={'20'}>
            <Center h={'full'} _hover={{ color: 'white', bg: 'green.700' }}>
              Jewelery
            </Center>
          </Link>
        </Box>
        <Box h={'full'} w={['auto', 'full']}>
          <Link to={'/electronics'} h={'20'} w={'20'}>
            <Center h={'full'} _hover={{ color: 'white', bg: 'green.700' }}>
              Electronics
            </Center>
          </Link>
        </Box>
      </Center>
    </BODY>
  );
};

export default Header;
