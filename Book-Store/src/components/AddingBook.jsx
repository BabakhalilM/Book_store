import React, { useState, useContext } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Stack } from '@chakra-ui/react';
import { Apicontext } from './Contextapi';

const AddingBook = () => {
    const { addBook } = useContext(Apicontext);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('fiction');
  
    const handleSubmit = () => {
      const newBook = {title,image,description,genre };
      addBook(newBook);
    };
  
    return (
      <Box p={5}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Image URL</FormLabel>
            <Input value={image} onChange={(e) => setImage(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Input value={description} onChange={(e) => setDescription(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Genre</FormLabel>
            <Input value={genre} isReadOnly />
          </FormControl>
          <Button onClick={handleSubmit}>Add Book</Button>
        </Stack>
      </Box>
    );
  };

export default AddingBook;
