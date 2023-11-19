import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
     <ChakraProvider>
    <App />
    </ChakraProvider>
  </BrowserRouter>
);


