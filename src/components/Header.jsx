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
} from '@chakra-ui/react';
import styled from 'styled-components';
import '../styles/Header.scss';
import SearchFilter from './searchfilter/SearchFilter';

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
            w={'40vw'}
            _hover={{ backgroundColor: 'green.500' }}
            onClick={handleButtonClick}
          >
            Search for products here
          </Button>
        </HStack>

        <HStack>
          <FiShoppingBag size={'27'} />
          <Box w={'20'} mr={['8', '10']}>
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

          <Box w={['40', '25']} mr={['-10', '10']}>
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

          <Box w={'20'} mr={['16', '24']}>
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
                    <HoverableH1>Account</HoverableH1>
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
                      Sign In
                    </NavLink>{' '}
                  </Text>
                </VStack>
              </HStack>
            </Link>
          </Box>
          <Box w={'20'} mr={['5', '5']}>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="#065f46"
                    viewBox="0 0 256 256"
                  >
                    <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                  </svg>
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
