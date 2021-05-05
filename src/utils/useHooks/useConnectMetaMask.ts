import { message } from 'antd';
import { getDvaApp } from 'umi';
import Web3 from 'web3';
import { useContext } from 'react';
import { Web3Context } from '@/config/provider/Web3Provider';

export const useConnectMetamask = async (web31: Web3) => {
  const dispatch = getDvaApp()._store.dispatch;

  // 先判断是否已经连接了

  const { web3 } = useContext(Web3Context);

  const chainId = 322;

  /*  await web3.givenProvider.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: `0x${chainId.toString(16)}`,
        chainName: 'Kucoin Smart Chain Testnet',
        nativeCurrency: {
          name: 'KCS',
          symbol: 'kcs',
          decimals: 18,
        },
        rpcUrls: ['https://rpc-testnet.kucoin.one'],
        blockExplorerUrls: ['https://kccscan.com/'],
      },
    ],
  }); */

  await web3.eth
    .requestAccounts()
    .then((res) => {
      console.log(res);
      dispatch({
        type: 'web3/__set',
        payload: { key: 'accountArray', value: res },
      });
      dispatch({
        type: 'web3/__set',
        payload: { key: 'currentAccount', value: web3.eth.defaultAccount },
      });
      dispatch({
        type: 'web3/__set',
        payload: { key: 'connectMetaMask', value: true },
      });
      message.success('成功连接 MetaMask 钱包');
    })
    .catch(() => {
      message.success('用户取消了授权');
    });
};
