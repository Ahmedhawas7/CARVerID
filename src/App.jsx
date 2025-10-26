import React from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import './index.css';

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient
});

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
          <div className="bg-gray-300 shadow-lg rounded-xl p-8 max-w-md w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-1 text-white">
              CARVerID
            </h1>
            <span className="text-sm text-gray-700 mb-6">Demo</span>
            <p className="mb-6 text-gray-800 text-center">
              Login with your wallet to experience CARVerID system.
            </p>
            <ConnectButton className="mb-4"/>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
