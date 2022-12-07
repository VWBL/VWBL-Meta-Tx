import { ethers } from "hardhat";

async function main() {
    const MetaTx = ethers.getContractFactory("VWBLMetaTx");
    const gatewayProxy = "0xa0cbAF6872f80172Bf0a471bC447440edFEC4475";
    const checkerByNFT = "0x9c9bd1b3376ccf3d695d9233c04e865e556f8980";
    const forwader = "0xf0511f123164602042ab2bCF02111fA5D3Fe97CD";
    const metaTx = (await MetaTx).deploy(gatewayProxy,checkerByNFT, forwader);
    await (await metaTx).deployed();
    console.log((await metaTx).address)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });