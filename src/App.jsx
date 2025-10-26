import React from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  RainbowKitProvider,
  ConnectButton
} from '@rainbow-me/rainbowkit';
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
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
          <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4 text-indigo-600">CARVerID Demo</h1>
            <p className="mb-6 text-gray-600 text-center">
              سجل الدخول بمحفظتك لتجربة نظام CARVerPlay. 
              هذه نسخة DEMO هادئة وأنيقة.
            </p>
            <ConnectButton className="mb-4"/>
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
