require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stove cost rifle pudding grace person brisk twenty'; 
let testAccounts = [
"0x10af992feaccb36b73a01104b724d4f5f25463d1932b5e2078a6d381ad6ed595",
"0xb0ab1d62ea008018adbcbaf69abd48cab8a58c1f28ad6fb85c4afb597bf69761",
"0x60047d5f50416473ca4de70f4328db720006b43c7e7fcfb10ee954b64f8d048e",
"0x30b4e2b6c3189068e84103ac3e5f683d359b0afb56731df2f1d0969e6c9fc11c",
"0xd887301a74911a8c11cd68b94b0bd505d4eff71e222ff277423aa7b5817fc1bf",
"0x1c022cc280d1e083ba2c985b43c576de9788f1c6b18da8617128bc0b25d8caea",
"0xd12db9451b22726b6b677530dfa9a6ec8170bddf7a92eb569244274b143ef60e",
"0xa461c9d972127417d5361cc935f373e657adaa88b517b0b8ac7f31a668c3b647",
"0xb296d77ae0d708f483b18d23617f56e0b3ae81e36871bd7611fb5afd69013df2",
"0xac3f8c8dc0be86dae141d1eb52dfa54db4ef6f326e7e422d6ebd05735f02b259"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


