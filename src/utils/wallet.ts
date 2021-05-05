import { getDvaApp } from 'umi';

export const setupNetwork = async () => {
  const provider = window.ethereum;
  if (provider) {
    const chainId = 322;
    try {
      await await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: 'Kucoin Smart Chain Testnet',
            nativeCurrency: {
              name: 'KCS',
              symbol: 'kcs',
              decimals: 18,
            },
            rpcUrls: ['https://rpc-testnet.kucoin.one'],
            blockExplorerUrls: ['https://bscscan.com/'],
          },
        ],
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the Kucoin Smart Chain Testnet on metamask because window.ethereum is undefined",
    );
    return false;
  }
};
