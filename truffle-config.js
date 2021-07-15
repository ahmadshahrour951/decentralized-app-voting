require('dotenv').config();
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = process.env['NEMONIC'];
var tokenKey = process.env['ENDPOINT_KEY'];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    develop: {
      port: 8545,
    },
    rinkeby: {
      host: "localhost",
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          'https://rinkeby.infura.io/v3/' + tokenKey
        );
      },
      network_id: 4,
      gas: 6700000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: '0.5.0',
    },
  },
};
