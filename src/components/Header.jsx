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
          <Box w={'20'} mr={['5', '10']}>
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
            <Link to={'/resources'}>
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
        gap={['3', '40']}
        fontFamily={'Arbutus Slab'}
      >
        <Link to={'/newarrivals'}>
          {' '}
          <HoverableH1>New Arrivals</HoverableH1>
        </Link>
        <Link to={'/men'}>
          <HoverableH1>Men</HoverableH1>
        </Link>
        <Link to={'/women'}>
          <HoverableH1>Women</HoverableH1>
        </Link>
        <Link to={'/jewelery'}>
          <HoverableH1>Jewelery</HoverableH1>
        </Link>
        <Link to={'/electronics'}>
          <HoverableH1>Electronics</HoverableH1>
        </Link>
      </Center>
    </BODY>
  );
};

export default Header;
