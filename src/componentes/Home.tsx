// Home.tsx
import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  theme,
} from '@chakra-ui/react';
import {Navbar} from './Navbar';

const FormColumn = ({ title }: { title: string }) => {
  return (
    <Box flex="1" p="5">
      <FormControl>
        <FormLabel>{title} Form Label</FormLabel>
        <Input placeholder={`${title} Input`} />
        <Button mt="4">Submit</Button>
      </FormControl>
    </Box>
  );
};
const Form: React.FC<{ title: string }> = ({ title }) => {
  return (
    <FormControl padding="20px" border="1px" borderColor="gray.200">
      <FormLabel>{title} Form</FormLabel>
      <Input type="text" placeholder={`Enter ${title}`} mb={4} />
      <Button colorScheme="blue">Submit</Button>
    </FormControl>
  );
};

const Home: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Navbar />
        <Flex direction="column" flex="1" overflowY="auto">
          <Flex direction={{ base: "column", md: "row" }} justify="space-around" p="4">
            <FormColumn title="First" />
            <FormColumn title="Second" />
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
