import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    local: {
      url: 'http://localhost:8545',
      gas: 1e8,
      blockGasLimit: 1e8
    },
  }
};

export default config;