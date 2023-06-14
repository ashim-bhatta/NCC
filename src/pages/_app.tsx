import Modal from '@/components/organisms/Modal/Modal';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import './index.css';

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
        <Modal />
      </Web3ReactProvider>
    </RecoilRoot>
  );
}
