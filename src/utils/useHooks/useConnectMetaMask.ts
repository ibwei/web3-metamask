import { message } from 'antd';
import { getDvaApp } from 'umi';
import Web3 from 'web3';

export const useConnectMetamask = (web3: Web3) => {
  const dispatch = getDvaApp()._store.dispatch;

  // 先判断是否已经连接了

  web3.eth
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
