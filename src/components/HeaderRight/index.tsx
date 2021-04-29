import { FunctionComponent, useState } from 'react';
import { connect } from 'umi';
import { Button } from 'antd';
import { Web3StateType } from '../../models/web3';
import { useEffect } from 'react';
import { useConnectMetamask } from '@/utils/useHooks/useConnectMetamask';
export interface HeaderRightProps {
  web3: Web3StateType;
}

const HeaderRight: FunctionComponent<HeaderRightProps> = (props) => {
  const { web3 } = props;
  const [text, setText] = useState('连接钱包');

  useEffect(() => {
    setText(() =>
      props.web3.connectMetaMask ? props.web3.currentAccount : '未登录',
    );
  }, [props.web3]);

  return web3.connectMetaMask ? (
    <span>当前账号：{text}</span>
  ) : (
    <Button onClick={useConnectMetamask.bind(null, web3.web3)}>连接钱包</Button>
  );
};

const mapState2Props = ({ web3 }: { web3: Web3StateType }) => {
  return {
    web3: web3,
  };
};

export default connect(mapState2Props)(HeaderRight);
