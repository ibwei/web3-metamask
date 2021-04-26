import Web3 from 'web3';
import { NModel } from '@/@types/store';
import { connect } from 'umi';

const state = {
  web3: new Web3(),
  installMetaMask: false,
  connectMetaMask: false,
  currentAccount: '',
  accountArray: [],
  chianId: 0,
};

export type Web3StateType = typeof state;

const Web3State: NModel<Web3StateType> = {
  namespace: 'web3', // 可省略
  state: state, // 初始状态：缓存或空数组
  effects: {},
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    __set(state: any, { payload }) {
      const { key, value } = payload;
      return { ...state, [key]: value };
    },
  },
};

export default Web3State;
