export const NETWORK_CONFIG = {
  testnet: {
    network: 'TESTNET',
    rpcUrl: 'https://soroban-testnet.stellar.org',
    networkPassphrase: 'Test SDF Network ; September 2015',
  },
  public: {
    network: 'PUBLIC',
    rpcUrl: 'https://soroban-rpc.mainnet.stellar.org',
    networkPassphrase: 'Public Global Stellar Network ; September 2015',
  }
};

export const getNetworkConfig = (network: 'testnet' | 'public' = 'testnet') => {
  return NETWORK_CONFIG[network];
};
