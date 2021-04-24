import { useEffect } from 'react';
import { connect, Dispatch } from 'umi';
import { Web3StateType } from '../models/web3';
import { useConnectMetaMask } from '../utils/useHooks/useConnectMetaMask';
import { Spin } from 'antd';

function AppLayout(props: any) {
  const { web3 }: { web3: Web3StateType } = props;

  /* 初始化连接ETH MetaMsk硬件钱包 */
  useEffect(() => {
    useConnectMetaMask();
  }, []);
  return (
    <Spin spinning={!web3.installMetaMask} tip="正在检查环境...">
      <div>{props.children}</div>
    </Spin>
  );
}

const mapState2Props = ({ web3 }: { web3: Web3StateType }) => {
  return { web3: web3 };
};

export default connect(mapState2Props)(AppLayout);
