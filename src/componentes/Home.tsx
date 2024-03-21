import React from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  ChakraProvider,
} from '@chakra-ui/react';

const Navbar: React.FC = () => (
  <Box bg="tomato" w="100%" p={4} color="white">
    Navbar Content Here
  </Box>
);

const FormColumn: React.FC<{ title: string }> = ({ title }) => (
  <Box flex="1" p="5">
    <FormControl>
      <FormLabel>{title} Form Label</FormLabel>
      <Input placeholder={`${title} Input`} />
      <Button mt="4">Submit</Button>
    </FormControl>
  </Box>
);

const Home: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex direction="column" align="center" m="4">
        <Navbar />
        <Flex direction="row" w="100%" justify="space-around" mt="6">
          <FormColumn title="First" />
          <FormColumn title="Second" />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
