import { Link } from 'react-router-dom';
import { FiShoppingBag, FiMapPin } from 'react-icons/fi';
import {
  Text,
  Avatar,
  HStack,
  VStack,
  Box,
  Center,
  Image,
} from '@chakra-ui/react';
import styled from 'styled-components';
import whale from '../assets/whale.png';

const BODY = styled.body`
  background-color: #dcfce7;
`;

const Header = () => {
  return (
    <BODY>
      <Center
        maxW={'100vw'}
        color={'white'}
        fontWeight={'bold'}
        bgColor={'#38A169'}
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
            fontFamily={'Inter'}
          >
            thelysian
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
                    Resources
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
            <Link to={'/resources'}>
              <HStack>
                <FiMapPin size={'27'} />
                <VStack>
                  <Text
                    fontSize={'smaller'}
                    fontWeight={'bold'}
                    justifyContent={'flex-start'}
                    alignSelf={'flex-start'}
                  >
                    Find Us
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
                    Account
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
      >
        <Link to={'/newarrivals'}>New Arrivals</Link>
        <Link to={'/men'}>Men</Link>
        <Link to={'/women'}>Women</Link>
        <Link to={'/jewelery'}>Jewelery</Link>
        <Link to={'/electronics'}>Electronics</Link>
      </Center>
    </BODY>
  );
};

export default Header;
