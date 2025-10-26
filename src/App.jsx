import React, { useState } from "react";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { RainbowKitProvider, ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const config = createConfig(
  getDefaultConfig({
    appName: "CARVerID",
    projectId: "YOUR_WALLETCONNECT_PROJECT_ID", // استبدله لاحقًا بالقيمة الخاصة بك من WalletConnect Cloud
    chains,
  })
);

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white">
          <h1 className="text-3xl font-bold mb-6">CARVerID</h1>
          <ConnectButton />
          <div className="mt-6">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none"
            />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
