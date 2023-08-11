import React from 'react';
import {
  Stack,
  Text,
  HStack,
  VStack,
  Center,
  Container,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <Stack direction={'row'} h={'20vh'} bgColor={'green.300'}>
        <VStack w={'50%'}>
          <Text>LEFT ONE</Text>
        </VStack>
        <VStack w={'50%'}>
          <Text>RIGHT ONE</Text>
        </VStack>
      </Stack>
    </>
  );
};

export default Footer;
