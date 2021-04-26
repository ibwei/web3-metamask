import { FunctionComponent } from 'react';
import ConnectMetaMask from '@/components/metamask/ConnectWallet/index';

export interface ConnectWalletPageProps {}

const ConnectWalletPage: FunctionComponent<ConnectWalletPageProps> = () => {
  return (
    <div className="connect-wallet-container">
      <ConnectMetaMask />
    </div>
  );
};

export default ConnectWalletPage;
