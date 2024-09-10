
import React, { useContext, useState } from 'react';

import { Box, Input, Button } from '@chakra-ui/react';
import { Apicontext } from './Contextapi';

const Booklist = () => {
  const { searchBooks } = useContext(Apicontext);
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearch = () => {
    searchBooks({ title: searchTitle});
  };

  return (
    <Box p={5}>
      <Box mb={4}>
        <Input
          placeholder="Search by title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Box>
    </Box>
  );
};

export default Booklist;
