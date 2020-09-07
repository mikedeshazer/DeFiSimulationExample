require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

// let truffle know what chain to migrate your contracts to
module.exports = {
  networks: {

    development:  {
    //  skipDryRun: true,
      host: "https://sandbox.truffleteams.com/a51728fe-360e-4bc7-a57e-2d91461f8d22",
      networkCheckTimeout: 10000,
      port: 443,
      network_id: "*",
      provider: () => new HDWalletProvider(
        "van slow kid seminar divorce group mask forget vibrant where evidence harvest",
        "https://sandbox.truffleteams.com/a51728fe-360e-4bc7-a57e-2d91461f8d22",
      )},
    test: {
    //  skipDryRun: true,
      host: "https://sandbox.truffleteams.com/a51728fe-360e-4bc7-a57e-2d91461f8d22",
      networkCheckTimeout: 10000,
      port: 443,
      network_id: "*",
      provider: () => new HDWalletProvider(
        "van slow kid seminar divorce group mask forget vibrant where evidence harvest",
        "https://sandbox.truffleteams.com/a51728fe-360e-4bc7-a57e-2d91461f8d22",
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
