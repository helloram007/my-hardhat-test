require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */

const { SEPOLIA_URL, SECRET_KEY, ETHERSCAN_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: SEPOLIA_URL || "",      
      accounts: 
        SECRET_KEY !== undefined ? [SECRET_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_KEY || ""
    }
  }
};
