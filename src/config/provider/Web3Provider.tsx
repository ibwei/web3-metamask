import React, { useState } from 'react';
import Web3 from 'web3';

const Web3Context = React.createContext<{
  web3: Web3;
  changeWeb3: any;
}>({
  web3: new Web3(Web3.givenProvider || 'ws://localhost:8545'),
  changeWeb3: () => undefined,
});

const Web3Provider: React.FunctionComponent = ({ children }) => {
  const [web3, setWeb3] = useState(
    new Web3(Web3.givenProvider || 'ws://localhost:8545'),
  );

  const changeWeb3 = (newWeb3: Web3): void => {
    setWeb3(() => {
      return newWeb3;
    });
  };

  return (
    <Web3Context.Provider value={{ web3, changeWeb3 }}>
      {children}
    </Web3Context.Provider>
  );
};

export { Web3Context, Web3Provider };
