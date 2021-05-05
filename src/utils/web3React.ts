import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

import Web3 from 'web3';

const POLLING_INTERVAL = 12000;
const rpcUrl = 'https://rpc-testnet.kucoin.one';
const chainId = 322;

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export const getLibrary = (provider: any): Web3 => {
  return provider;
};
