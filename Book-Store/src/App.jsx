import React, { useContext } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Apicontext } from './components/Contextapi';
import Booklist from './components/Booklist';
import AddingBook from './components/AddingBook';
import Book from './components/Book';

const App = () => {
  const { books } = useContext(Apicontext);

  return (
    <Box p={5}>
      <Booklist />
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        justify="space-between" 
        gap={5}
        mt={5}
      >
        <Box 
          flex="1" 
          maxW={{ base: '100%', md: '40%' }} 
          mb={{ base: 5, md: 0 }} 
        >
          <AddingBook />
        </Box>

        <Box 
          flex="2" 
          maxW={{ base: '100%', md: '60%' }} 
          mt={{ base: 5, md: 0 }} 
        >
          <Book />
        </Box>
      </Flex>
    </Box>
  );
};

export default App;
