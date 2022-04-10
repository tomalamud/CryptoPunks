import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
)
