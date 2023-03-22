import { expect } from "chai";
import { ethers, waffle } from "hardhat";

const helper = async (victim: any) => {
  /* 
    Add code here that will help you pass the test
    Note: Unlock without using the string "A very strong password"
    Unlock the vault by somehow reading the private password from 
    Vault directly
  */
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545');
  const password = await provider.getStorageAt(victim.address, 1);
  await victim.unlock(password);
};

export default helper;
