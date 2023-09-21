import React from 'react';
import './test.css';
import SearchFilter from './SearchFilter';
import { Box } from '@chakra-ui/react';

const Test = ({ selected }) => {
  return (
    <>
      <Box minH={'100vh'}>
        <SearchFilter />
      </Box>
    </>
  );
};

export default Test;
