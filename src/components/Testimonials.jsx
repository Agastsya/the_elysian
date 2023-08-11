import React from 'react';
import { Stack, Text, Image, Center, Container } from '@chakra-ui/react';
import styled from 'styled-components';

const BODY = styled.body`
  font-family: 'Arbutus Slab', serif;
`;

const Testimonials = () => {
  return (
    <BODY>
      <Center fontSize={'5xl'} pt={'10'}>
        <Text bgColor={'#34d399'} rounded={'3xl'} p={'3'}>
          Testimonials
        </Text>
      </Center>
      <Container maxW={'container.xl'} gap={'80'}>
        <Stack
          direction={['column', 'row']}
          px={'30'}
          py={'30'}
          rounded={'3xl'}
          bgColor={'#34d399'}
          my={'20'}
          align={['center', 'auto']}
        >
          <Text
            pr={['0', '20']}
            bgColor={'whiteAlpha.900'}
            rounded={'3xl'}
            py={'2'}
            px={'1'}
          >
            {' '}
            "I can't believe the amazing experience I had with this ecommerce
            website! The products are out of this world... literally! I ordered
            a teleportation device and not only did it arrive in a sleek,
            futuristic package, but it also worked like a charm! I've never been
            so impressed with a shopping website before. The customer service
            was equally mind-blowing; they had a team of friendly robots ready
            to assist me 24/7. Shopping here is like taking a journey to the
            future of retail. I'm definitely coming back to buy a flying car
            next time. 10/10, would teleport again!"
          </Text>
          <Image
            borderRadius="full"
            boxSize="250px"
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dan Abramov"
            align={['center', 'auto']}
          />
        </Stack>
        <Stack
          direction={['column', 'row']}
          px={'30'}
          py={'30'}
          rounded={'3xl'}
          bgColor={'#34d399'}
          my={'20'}
          align={['center', 'auto']}
        >
          <Image
            borderRadius="full"
            boxSize="250px"
            src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dan Abramov"
            align={['center', 'auto']}
          />
          <Text
            pl={['0', '20']}
            bgColor={'whiteAlpha.900'}
            rounded={'3xl'}
            py={'2'}
            px={'1'}
          >
            {' '}
            "I've been shopping online for years, but I've never come across an
            ecommerce website quite like this one. The range of clothing options
            for both men and women is mind-boggling – from trendy styles to
            classic pieces, they've got it all. But what really blew me away was
            their electronic products section. The seamless navigation and
            detailed product descriptions made my shopping experience a breeze.
            I recently bought a new smartphone from them, and not only was the
            price unbeatable, but the delivery was lightning-fast. This website
            has become my go-to destination for all my fashion and tech needs!"
          </Text>
        </Stack>
        <Stack
          direction={['column', 'row']}
          px={'30'}
          py={'30'}
          rounded={'3xl'}
          bgColor={'#34d399'}
          my={'20'}
          align={['center', 'auto']}
        >
          <Text
            px={['3', '21']}
            bgColor={'whiteAlpha.900'}
            rounded={'3xl'}
            py={'2'}
          >
            {' '}
            "Two things I'm passionate about: staying ahead in fashion and
            keeping up with the latest tech trends. This ecommerce website is a
            dream come true for someone like me. The clothing collection is on
            point, catering to diverse tastes and sizes for both men and women.
            I've revamped my entire wardrobe with their stylish options. But
            what truly caught my attention is their electronic products range.
            From laptops to headphones, they offer top-notch brands at
            competitive prices. I recently upgraded my laptop through their
            platform, and the whole process was seamless – from ordering to
            delivery. This website is a one-stop shop for fashion-forward
            individuals who also crave the latest gadgets."
          </Text>
          <Image
            borderRadius="full"
            boxSize="250px"
            src="https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dan Abramov"
          />
        </Stack>
      </Container>
    </BODY>
  );
};

export default Testimonials;
