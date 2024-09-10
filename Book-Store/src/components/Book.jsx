
import React, { useContext } from 'react';
import { Apicontext } from './Contextapi';
import { Box, Text, Image, Button, Card, CardBody, CardFooter, Heading, SimpleGrid, Flex } from '@chakra-ui/react';

const Book = () => {
    const { books, deleteBook } = useContext(Apicontext);

    return (
        <>
              <Heading textAlign={"center"}>All Books Available</Heading>
            {books.length==0 && <Text>No Books Avaulable</Text> }
        
            <Flex
                wrap="wrap"
                justify='space-around'
                gap={4}

            >
            {
                books.map(book => (
                    
                    <Card borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                        <CardBody>
                            <Heading size="md" mb={2}>Title: {book.title}</Heading>
                            <Text>Genre: {book.genre}</Text>
                            <details>
                                <summary>Book Description</summary>
                                <Text>{book.description}</Text>
                            </details>
                            <Image src={book.image} alt={book.title} boxSize="150px" mt={3} />
                        </CardBody>
                        <CardFooter>
                            <Button colorScheme="red" onClick={() => deleteBook(book.id)}>Delete</Button>
                        </CardFooter>
                    </Card>
                ))
            }
            </Flex>
        </>
    );

};

export default Book;
