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

// إعداد الشبكات والمحافظ
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
          accentColor: '#000000', //
