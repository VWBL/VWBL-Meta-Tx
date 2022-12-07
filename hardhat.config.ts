import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();
const privKey = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    local: {
      url: 'http://localhost:8545',
      gas: 1e8,
      blockGasLimit: 1e8
    },
    munbai: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      accounts: [privKey!],
      gas: 5500000,
    },
    polygon: {
      url: "	https://polygon-rpc.com/",
      accounts: [privKey!],
      gas: 5500000,
    }
  }
};

export default config;