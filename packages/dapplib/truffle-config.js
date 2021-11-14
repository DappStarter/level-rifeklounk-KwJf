require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strong cruise office pulp hockey knife fortune stove'; 
let testAccounts = [
"0x37700cecbc49ae91dde7d37ed0bdd2de3b574804f79123743c78da3970a03c77",
"0x56a00a61305f81d9e78b0fb84c2857d23b4318358af769ecf553ebca43895cf4",
"0x3a0a19c902bb0e5e5516294c6bad20e603d2ee84269b258fc329639bf75e01d4",
"0x6cf5cc80ac9360f1a368c35335b99ba6e09ab9f2c4c4b92363d53074ed4ede0e",
"0xc9bb6f9206496e71f1b6027ff325cd3715f2185ad0fa330b4bf798d9a389ff35",
"0xb9750e4ae66aa76833e690ce4661e6570c6ac82929f50f84d962b44b0e09191b",
"0xc933b047c29a76f9b5caf99362622ef5c1cc7c312b0dbae6fa35ee151d51082c",
"0x80beeefb82626bb26516f64ba9b346c8575724b67fc59dcafd7b61a3ea473145",
"0xfd8fc8f5decd1d411c4a9f057e40daed237907aa15374cb947388ab4a76ffb84",
"0xcd1168586a350fd9e8fb0921c9d944af6f197fe15be6e92b77b41e133e67625d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

