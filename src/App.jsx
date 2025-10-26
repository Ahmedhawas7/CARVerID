import React from 'react';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  RainbowKitProvider,
  ConnectButton,
  getDefaultWallets,
  darkTheme
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import './index.css';

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'CARVerID Demo',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: '#000000', // زر أسود
          accentColorForeground: '#ffffff', // نص أبيض
          borderRadius: 'medium',
          overlayBlur: 'small'
        })}
      >
        <div className="min-h-screen flex justify-center items-center bg-[#6614b8] p-4">
          <div className="bg-black/70 backdrop-blur-md shadow-lg rounded-xl p-8 max-w-md w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-1 text-white">
              CARVerID
            </h1>
            <span className="text-sm text-white mb-6">Demo</span>
            <p className="mb-6 text-white text-center">
              Connect your wallet to try CARVerID system.
            </p>
            <ConnectButton showBalance={false} />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
