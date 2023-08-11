import { Link } from 'react-router-dom';
import { FiShoppingBag, FiMapPin } from 'react-icons/fi';
import { Text, Avatar, HStack, VStack, Box, Center } from '@chakra-ui/react';
import styled from 'styled-components';

const BODY = styled.body`
  background-color: #dcfce7;
  font-family: 'Arbutus Slab', serif;
`;

const HoverableH1 = styled.h1`
  &:hover {
    color: #16a34a;
  }
`;

const Header = () => {
  return (
    <BODY>
      <Center maxW={'100vw'} color={'white'} bgColor={'#38A169'}>
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
                    FAQ,Blog,Support
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
                    Store Locator
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
                  >
                    Sign In
                  </Text>
                </VStack>
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
