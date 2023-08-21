import React from 'react';
import {
  Stack,
  Text,
  Image,
  Center,
  Container,
  VStack,
} from '@chakra-ui/react';
import { Star } from 'phosphor-react';
import styled from 'styled-components';
import test1 from '../assets/test1.png';
import test2 from '../assets/test2.png';
import test3 from '../assets/test3.png';

const BODY = styled.body`
  font-family: 'Arbutus Slab', serif;
`;

const Testimonials = () => {
  return (
    <BODY>
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
          <VStack>
            <Image
              borderRadius="100%"
              w={'40rem'}
              src={test1}
              alt="Dan Abramov"
              align={['center', 'auto']}
            />
            <Text fontWeight={'bold'} fontFamily={'Nunito'}>
              Dan Abramov
            </Text>
            <Text fontWeight={'bold'} display={'flex'} fontFamily={'Nunito'}>
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />{' '}
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />
            </Text>
          </VStack>
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
          <VStack>
            <Image
              borderRadius="100%"
              w={'45rem'}
              src={test2}
              alt="Dan Abramov"
              align={['center', 'auto']}
            />
            <Text fontWeight={'bold'} fontFamily={'Nunito'}>
              Charlotte White
            </Text>
            <Text fontWeight={'bold'} display={'flex'} fontFamily={'Nunito'}>
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />{' '}
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />
            </Text>
          </VStack>
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
          <VStack>
            <Image
              borderRadius="100%"
              w={'45rem'}
              src={test3}
              alt="Dan Abramov"
              align={['center', 'auto']}
            />
            <Text fontWeight={'bold'} fontFamily={'Nunito'}>
              EunYoung{' '}
            </Text>
            <Text fontWeight={'bold'} fontFamily={'Nunito'} display={'flex'}>
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />{' '}
              <Star size={20} style={{ color: 'yellow' }} />
              <Star size={20} style={{ color: 'yellow' }} />
            </Text>
          </VStack>
        </Stack>
      </Container>
    </BODY>
  );
};

export default Testimonials;
