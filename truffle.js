var HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/'),
      network_id: 3
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/'),
      network_id: 4
    },
    kovan: {
      provider: new HDWalletProvider(mnemonic, 'https://kovan.infura.io'),
      network_id: 42
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      network_id: 1
    }
  }
};
