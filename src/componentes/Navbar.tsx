import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Button,
  Heading,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Page1 from './Page1'; // Your Page 1 component
import Page2 from './Page2'; // Your Page 2 component

export const Navbar: React.FC = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      left={0}
      top={0}
      h="full"
      w="15%"
      p={4}
      bg="blue.500"
      color="white"
    >
      <VStack spacing={4} align="stretch">
        <Heading as={Link} to="/" size="md">Navbar</Heading>
        <Button as={Link} to="/page1" variant="ghost">Page 1</Button>
        <Button as={Link} to="/page2" variant="ghost">Page 2</Button>
        {/* Add more buttons/links as needed */}
      </VStack>
    </Box>
  );
};