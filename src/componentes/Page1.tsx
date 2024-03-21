// Page1.tsx
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
  Center,
} from '@chakra-ui/react';
import { Navbar } from './Navbar';

const Page1: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Center >
      <Navbar />
      <Box>
        <Text>This is Page 1</Text>
      </Box>
    </Center>
  </ChakraProvider>
);

export default Page1;
