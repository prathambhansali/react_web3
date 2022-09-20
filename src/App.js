import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';

function App() {
    return (
        <div className="wrapper">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <nav>
                <ul>
                    <li><Link to="/eth_nft">EthNFT</Link></li>
                    <li><Link to="/eth_wp">EthWavePortal</Link></li>
                    <li><Link to="/sol_gif">SolanaGIF</Link></li>
                    <li><Link to="/sol_nft">SolanaNFT</Link></li>
                    <li><Link to="/eth_bank">EthBank</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
