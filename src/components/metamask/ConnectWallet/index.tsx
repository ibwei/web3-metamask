import { FunctionComponent } from 'react';
import { Button, message } from 'antd/';
import { connect, useDispatch } from 'umi';
import Web3 from 'web3';
import { Web3StateType } from '@/models/web3';
import { useEffect } from 'react';
import { useConnectMetamask } from '@/utils/useHooks/useConnectMetamask';
import { setupNetwork } from '@/utils/wallet';

export interface ConnectMetaMaskProps {
  web3: Web3;
}

const ConnectMetaMask: FunctionComponent<ConnectMetaMaskProps> = (props) => {
  const { web3 } = props;

  const dispatch = useDispatch();

  console.log('current provider');

  console.log('provider', web3?.eth?.currentProvider);
  console.log(
    'selected-address',
    (web3.eth.currentProvider as any)?.selectedAddress as any,
  );

  /** 请求连接到 metamask 钱包 */

  // 检测是否已经连接了MetaMask钱包

  return (
    <div>
      <Button type="primary" onClick={setupNetwork}>
        Connect MetaMask
      </Button>
    </div>
  );
};

const mapState2Props = ({ web3 }: { web3: Web3StateType }) => {
  return { web3: web3.web3 };
};

export default connect(mapState2Props)(ConnectMetaMask);
