require("dotenv").config();
var yourArchiveNodeURL = "INSERT HERE";
var yourPrivateKey = "INSERT HERE or get env var";
if(yourArchiveNodeURL == "INSERT HERE"){
  console.log("Oops! Set your archive node and private key! This won't work well for you unless you update truffle js!!")

}
const HDWalletProvider = require("@truffle/hdwallet-provider");

// let truffle know what chain to migrate your contracts to
module.exports = {
  networks: {

    development:  {
    //  skipDryRun: true,
      host: yourArchiveNodeURL,
      networkCheckTimeout: 10000,
      port: 443,
      network_id: "*",
      provider: () => new HDWalletProvider(
        yourPrivateKey,
        yourArchiveNodeURL,
      )},
    test: {
    //  skipDryRun: true,
      host: yourArchiveNodeURL,
      networkCheckTimeout: 10000,
      port: 443,
      network_id: "*",
      provider: () => new HDWalletProvider(
        yourPrivateKey,
        yourArchiveNodeURL,
      ),
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
     timeout: 100000,
     before_timeout: 120000

  },

  compilers: {
    solc: {
       version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
