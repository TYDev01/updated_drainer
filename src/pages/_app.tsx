import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';

import { WagmiConfig, configureChains, Chain, createConfig, sepolia  } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, goerli, bsc } from 'viem/chains';
import "@/styles/globals.css";

// 1. Get projectId at https://cloud.walletconnect.com

const projectId =
  process.env.NEXT_PUBLIC_PROJECT_ID || 'd332748588db640266e834d819731c31';


// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Justdapp',
  url: 'https://sync.justdapp.pro/',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, goerli, bsc];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main  className='font-grotesk h-full w-full bg-primary   text-white hero_container'>
      <WagmiConfig config={wagmiConfig}>
        {' '}
        <Component {...pageProps} />
      </WagmiConfig>
    </main>
  );
}
