const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.ETH_RPC);

const wallet = new ethers.Wallet(
  process.env.PRIVATE_KEY,
  provider
);

const contractAddress = process.env.CONTRACT_ADDRESS;

const abi = [
  "function issueCredential(address user,string skill,uint256 score)"
];

const contract = new ethers.Contract(
  contractAddress,
  abi,
  wallet
);

const issueCredential = async (userAddress, skill, score) => {
  try {

    const tx = await contract.issueCredential(
      userAddress,
      skill,
      score
    );

    await tx.wait();

    console.log("Credential stored on blockchain:", tx.hash);

    return tx.hash;

  } catch (error) {

    console.error("Blockchain error:", error);

  }
};

module.exports = { issueCredential };