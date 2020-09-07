# DeFi Simulation Example

## Notes

Make sure to set your archive node endpoint and private key in truffle-config.js! (Use your Truffle Teams mainnet fork info). If you're using an archive node and don't want your real Ether to be spent during a simulation, you will need to run a mainnet fork from within Ganache (within Ganache fork settings pointing to your archive node) and point your truffle config url to your localhost. (https://medium.com/@samajammin/how-to-interact-with-ethereums-mainnet-in-a-development-environment-with-ganache-3d8649df0876)

Also, make sure you `npm install` before running this example

If you use an archive node that's not from Truffle, then your private key should point to an account that had funds at the block you specified as your forked block. 
