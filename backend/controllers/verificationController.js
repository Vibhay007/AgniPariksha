const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.JsonRpcProvider(process.env.ETH_RPC);

const contractAddress = process.env.CONTRACT_ADDRESS;

const abi = [
  "function credentials(uint256) view returns(address user,string skill,uint256 score,uint256 timestamp)"
];

const contract = new ethers.Contract(
  contractAddress,
  abi,
  provider
);

exports.verifySkills = async (req, res) => {

  try {

    const { wallet } = req.params;

    let index = 0;
    const results = [];

    while (true) {

      try {

        const credential = await contract.credentials(index);

        if (credential.user.toLowerCase() === wallet.toLowerCase()) {

          results.push({
            skill: credential.skill,
            score: credential.score.toString(),
            timestamp: credential.timestamp.toString()
          });

        }

        index++;

      } catch (error) {
        break;
      }

    }

    res.json(results);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Verification failed"
    });

  }

};