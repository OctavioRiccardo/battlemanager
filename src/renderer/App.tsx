import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../componentes/Home';
import { Navbar } from '../componentes/Navbar';
import Page2 from '../componentes/Page2';
import Page1 from '../componentes/Page1';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex>
          <Navbar />
          <Flex
            ml={{ base: '0', sm: '15%' }} // Adjust the left margin to make space for the navbar on larger screens
            width="full"
            flexDirection="column"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </Flex>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
