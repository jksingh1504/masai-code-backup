import { Heading, Text, VStack } from "@chakra-ui/react";

function BooksCard({ book }) {
  return (
    <VStack data-cy="book_card">
      <Heading as="h2">{book.title}</Heading>
      <Heading as="h3">{book.author}</Heading>
      <Heading as="h5">{book.category}</Heading>
      <Heading as="h6">{book.publication_date}</Heading>
      <Text>{book.isbn}</Text>
    </VStack>
  );
}

export default BooksCard;
