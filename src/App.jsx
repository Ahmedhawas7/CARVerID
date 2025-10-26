// src/App.jsx
import React from "react";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

// إعداد الشبكات والمزودين
const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

// إعداد Wagmi
const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
});

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
          <h1>CARVerID</h1>
          <p>Welcome! Connect your wallet to continue.</p>
          <ConnectButton />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
