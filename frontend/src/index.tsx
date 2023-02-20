import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n";
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const getLibrary = (provider: any, connector: any) => {
  return new ethers.providers.Web3Provider(provider)
}

root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
