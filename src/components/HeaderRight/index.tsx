import { FunctionComponent, useState } from 'react';
import { connect } from 'umi';
import { Web3StateType } from '../../models/web3';
import Web3 from 'web3';
import { useEffect } from 'react';
export interface HeaderRightProps {
  web3: Web3StateType;
}

const HeaderRight: FunctionComponent<HeaderRightProps> = (props) => {
  const [text, setText] = useState('未登录');

  useEffect(() => {
    console.log('haha');
    setText(() =>
      props.web3.connectMetaMask ? props.web3.currentAccount : '未登录',
    );
  }, [props.web3]);

  return <span>{text}</span>;
};

const mapState2Props = ({ web3 }: { web3: Web3StateType }) => {
  return {
    web3: web3,
  };
};

export default connect(mapState2Props)(HeaderRight);
