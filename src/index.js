import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { ChakraProvider } from '@chakra-ui/react';
import PageState from './components/context/PageState.jsx';

export const apiserver = 'https://nodejs-todo-backend-2had.onrender.com/api/v1';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageState>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </PageState>
);

export const server = `https://fakestoreapi.com`;
