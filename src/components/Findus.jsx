import React from 'react';
import { Heading, Box, Center, Text, VStack, Stack } from '@chakra-ui/react';
import styled from 'styled-components';
import { BiMap } from 'react-icons/bi';

const BODY = styled.body`
  background-color: #dcfce7;
  font-family: 'Arbutus Slab', serif;
`;

const LI = styled.li`
  display: flex;
`;

export const Findus = () => {
  return (
    <BODY>
      <Heading py={'16'} bgColor={'green.300'}>
        <Center>Find Us Here</Center>
      </Heading>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9676470447203!2d77.02699707549962!3d28.60074737568218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd61eb460af%3A0xe89377d97456bc5e!2sVegas%20Mall%20(Dwarka%20Sector%20-%2014%2C%20Delhi)!5e0!3m2!1sen!2sin!4v1691772451722!5m2!1sen!2sin"
          height="450"
          width="100%"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </Box>
      <Box>
        <Text fontSize={['sm', '4xl']} fontWeight={'bold'}>
          <Center pt={'4'}>Office Locations</Center>
          <Stack
            w={'full'}
            direction={'row'}
            justifyContent={['initial', 'space-evenly']}
            py={['10', '16']}
          >
            <LI>
              <BiMap />
              Banglore
            </LI>
            <LI>
              <BiMap />
              Delhi
            </LI>
            <LI>
              <BiMap />
              Gurugram
            </LI>
            <LI>
              <BiMap />
              Noida
            </LI>
            <LI>
              <BiMap />
              Mumbai
            </LI>
          </Stack>
          <VStack></VStack>
        </Text>
      </Box>
    </BODY>
  );
};

export default Findus;
