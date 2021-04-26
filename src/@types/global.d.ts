import Web3 from 'web3';
declare global {
  var ENV_CONFIG: { NODE_ENV: string; baseUrl: string };
  interface Window {
    web3: Web3;
  }
}
