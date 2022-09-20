import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import EthNFT from './components/EthNFT';
import EthWavePortal from './components/EthWavePortal';
import SolanaGIF from './components/SolanaGIF';
import SolanaNFT from './components/SolanaNFT';
import EthBank from './components/EthBank';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/eth_nft",
    element: <EthNFT />,
  },
  {
    path: "/eth_wp",
    element: <EthWavePortal />,
  },
  {
    path: "/sol_gif",
    element: <SolanaGIF />,
  },
  {
    path: "/sol_nft",
    element: <SolanaNFT />,
  },
  {
    path: "/eth_bank",
    element: <EthBank />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
