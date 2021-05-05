import { Web3Provider } from '@/config/provider/Web3Provider';
import { ThemeProvider } from '@/config/provider/ThemeProvider';
import { Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import App from './App';
import { getLibrary } from '../utils/web3React';

export default () => {
  return (
    <React.StrictMode>
      <Web3Provider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Web3Provider>
    </React.StrictMode>
  );
};
