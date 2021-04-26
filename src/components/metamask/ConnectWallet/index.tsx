import { FunctionComponent } from 'react';
import { Button, message } from 'antd/';
import { connect, useDispatch } from 'umi';
import Web3 from 'web3';
import { Web3StateType } from '../../../models/web3';
export interface ConnectMetaMaskProps {
  web3: Web3;
}

const ConnectMetaMask: FunctionComponent<ConnectMetaMaskProps> = (props) => {
  const { web3 } = props;

  const dispatch = useDispatch();

  /** 请求连接到 metamask 钱包 */
  const requestForMetaMask = () => {
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
          payload: { key: 'currentAccount', value: res[0] },
        });
        dispatch({
          type: 'web3/__set',
          payload: { key: 'connectMetaMask', value: true },
        });
        message.success('成功连接 MetaMask 钱包');
      })
      .catch((err) => {
        message.success('连接 MetaMask 钱包失败');
      });
  };

  return (
    <div>
      <Button type="primary" onClick={requestForMetaMask}>
        Connect MetaMask
      </Button>
    </div>
  );
};

const mapState2Props = ({ web3 }: { web3: Web3StateType }) => {
  return { web3: web3.web3 };
};

export default connect(mapState2Props)(ConnectMetaMask);
