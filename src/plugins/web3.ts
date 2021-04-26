import Web3 from 'web3';

const web3Instance = new Web3(Web3.givenProvider || 'ws://localhost:8545');

export { web3Instance };
