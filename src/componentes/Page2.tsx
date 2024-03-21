// Page2.tsx
import React from 'react';
import {
    ChakraProvider,
    Box,
    Flex,
    VStack,
    Button,
    Text,
    Heading,
    FormControl,
    FormLabel,
    Input,
    theme,
  } from '@chakra-ui/react';
  import { Navbar } from './Navbar';
const Page2: React.FC = () => (
    <ChakraProvider theme={theme}>
    <Flex>
      <Navbar />
      <Box>
        <Text>This is Page 2</Text>
      </Box>
    </Flex>
  </ChakraProvider>
);

export default Page2;