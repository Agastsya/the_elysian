import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Center,
  Text,
  Container,
} from '@chakra-ui/react';
import data from './FaqData';

const Faq = () => {
  return (
    <>
      <Box w={'full'} h={'40vh'} maxW={'100vw'}>
        <Center w={'full'} h={'40vh'} borderRadius={'3xl'} maxW={'full'}>
          <Text
            fontSize={'4xl'}
            fontWeight={'extrabold'}
            pt={['10', '6']}
            zIndex={'1'}
            style={{ 'box-shadow': '10px 10px' }}
            border="2px solid black"
            borderRadius={'10px'}
            bgColor={'whiteAlpha.500'}
            px={['0', '2rem']}
            bgGradient="linear(to-l, #20e3b2, #29ffc6)"
          >
            Frequently Asked Questions
          </Text>
        </Center>
      </Box>
      <Accordion allowMultiple mx={['0', '20']} py={['20', '40']}>
        {data.map(item => (
          <AccordionItem
            key={item.key}
            bgGradient="linear(to-l, #20e3b2, #29ffc6)"
          >
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Container />
    </>
  );
};

export default Faq;
