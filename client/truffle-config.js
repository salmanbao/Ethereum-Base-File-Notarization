/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 *   > > Using Truffle V5 or later? Make sure you install the `web3-one` version.
 *
 *   > > $ npm install truffle-hdwallet-provider@web3-one
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const HDWalletProvider = require('truffle-hdwallet-provider')
const seedPhrase =
  'differ valley cliff whale heavy video grocery host nerve anger noodle deny'

// const HDWallet = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  contracts_build_directory: './src/build',
  networks: {
    development: {
      host: 'localhost', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '5777',
    }, // Any network (default: none)

    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          seedPhrase,
          'https://rinkeby.infura.io/v3/40c03a936f1a4a8fa76fd379cc3dd92e',
        )
      },
      network_id: 4,
      gas: 3000000,
      gasPrice: 10000000000,
    },
  },
}

//   ropsten: {
//       provider: function() {
//         return new HDWalletProvider(seedPhrase, "https://ropsten.infura.io/v3/40c03a936f1a4a8fa76fd379cc3dd92e")
//       },
//       network_id: 3,
//       gas: 3000000,
//       gasPrice: 10000000000,
//     }
//   }
// };

// Useful for deploying to a public network.
// NB: It's important to wrap the provider as a function.
// ropsten: {
// provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/${infuraKey}`),
// network_id: 3,       // Ropsten's id
// gas: 5500000,        // Ropsten has a lower block limit than mainnet
// confirmations: 2,    // # of confs to wait between deployments. (default: 0)
// timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
// skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
// },

// Useful for private networks
// private: {
// provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
// network_id: 2111,   // This network is yours, in the cloud.
// production: true    // Treats this network as if it was a public net. (default: false)
// }
