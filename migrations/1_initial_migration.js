const TrojanCoinAfter = artifacts.require("TrojanCoinAfter");

module.exports = async function(deployer, network, accounts) {
await deployer.deploy(TrojanCoinAfter);

};
