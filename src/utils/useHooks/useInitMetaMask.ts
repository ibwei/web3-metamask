import { Modal } from 'antd';
import { useState } from 'react';
import Web3 from 'web3';
import { message } from 'antd';
import { getDvaApp } from 'umi';
export const useInitMetaMask = () => {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  console.log('window.web3', window.web3);
  // Use the browser's ethereum provider
  if (typeof window.web3 !== 'undefined') {
    console.log('------', window.ethereum);
    const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');
    const dispatch = getDvaApp()._store.dispatch;
    dispatch({
      type: 'web3/__set',
      payload: { key: 'web3', value: web3 },
    });
    setTimeout(() => {
      dispatch({
        type: 'web3/__set',
        payload: { key: 'installMetaMask', value: true },
      });
    }, 1000);
  } else {
    Modal.error({ content: '您未安装 MetaMask 钱包插件，请先去安装！' });
  }
};
