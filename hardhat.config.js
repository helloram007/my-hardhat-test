require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */

//const { SEPOLIA_URL, SECRET_KEY, ETHERSCAN_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  compilers: [
    {
      version: "0.8.24",
      settings: {
        evmVersion: "sepolia",
        optimizer: {
          enabled: true,
          runs: 1000,
        },
      },
    },
  ],
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/613t3mfjTevdrCwDl28CVvuk6wSIxRPi",
      }
    },
    sepolia: {
      url: process.env.SEPOLIA_URL || "",      
      accounts: 
      process.env.SECRET_KEY !== undefined ? [process.env.SECRET_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_KEY || ""
    }
  }
};
