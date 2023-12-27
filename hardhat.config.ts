import { HardhatUserConfig } from "hardhat/types";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-solhint";
import "hardhat-deploy-ethers";
import "hardhat-tracer";
import "hardhat-log-remover";
import "hardhat-dependency-compiler";
// import "hardhat-local-networks-config-plugin";
import "hardhat-abi-exporter";
import "hardhat-gas-reporter";
import "hardhat-docgen";
import "@hardhat-docgen/core";
import "@hardhat-docgen/markdown";
import "hardhat-contract-sizer";
import "hardhat-spdx-license-identifier";
import "hardhat-deploy";
import "solidity-coverage";
import { config as dotEnvConfig } from "dotenv";
import { removeConsoleLog } from "hardhat-preprocessor";

dotEnvConfig();

const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {

  defaultNetwork: "sepolia",

  solidity: {
    compilers: [
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          outputSelection: {
						"*": {
              "*": ["storageLayout"]
						}
					}
        },
      },
    ],
  },

  typechain: {
    outDir: "./build/typechain",
    target: "ethers-v5",
  },

  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      }
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78`,
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      }
    },
    coverage: {
      url: "http://127.0.0.1:8555",
    },
  },

  namedAccounts: {
		deployer: {
			default: 0
		},
		buyer: {
			default: 1
		},
		seller: {
			default: 2
		},
		support: {
			default: 3
		},
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },

  contractSizer: {
		alphaSort: true,
		runOnCompile: false,
		disambiguatePaths: false
	},

	abiExporter: {
		path: "./build/abi/",
		runOnCompile: true,
		clear: true,
		spacing: 2,
		pretty: true
	},

	spdxLicenseIdentifier: {
		overwrite: true,
		runOnCompile: false
	},

	preprocess: {
		eachLine: removeConsoleLog((hre) => hre.network.name !== "hardhat" && hre.network.name !== "localhost")
	},

	gasReporter: {
    enabled: process.env.REPORT_GAS ? true : false,
		currency: "USD",
		showMethodSig: false,
		showTimeSpent: true
	}
};

export default config;
