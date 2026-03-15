const Submission = require("../models/Submission");
const TestCase = require("../models/TestCase");
const { executeCode } = require("../services/judge0Service");
const { issueCredential } = require("../services/blockchainService");
const languages = require("../config/languages");

exports.submitCode = async (req, res) => {

  try {

    const { walletAddress, problemId, code, language } = req.body;

    const languageId = languages[language];

    if (!languageId) {
      return res.status(400).json({
        error: "Unsupported language"
      });
    }

    const testCases = await TestCase.find({
      problemId,
      hidden: true

      
    });

    if (testCases.length === 0) {
      return res.status(404).json({
        error: "No test cases found"
      });
    }

    let passed = 0;

    for (const testCase of testCases) {

      const result = await executeCode(
        code,
        languageId,
        testCase.input
      );

      if (
        result.stdout &&
        result.stdout.trim() === testCase.expectedOutput.trim()
      ) {
        passed++;
      }

    }

    const score = Math.round((passed / testCases.length) * 100);

    // Save submission in database
    const submission = new Submission({
      walletAddress,
      problemId,
      code,
      language,
      score
    });

    await submission.save();

    let txHash = null;

    // Issue blockchain credential if score is high
    if (score >= 80) {

      txHash = await issueCredential(
        walletAddress,
        "Problem Solving",
        score
      );

    }

    res.json({
      message: "Submission evaluated",
      score,
      passed,
      total: testCases.length,
      blockchainTx: txHash
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Evaluation failed"
    });

  }

};

exports.getSubmissions = async (req,res) => {

  try {

    const submissions = await Submission.find({
      walletAddress:req.params.wallet
    });

    res.json(submissions);

  } catch(error){

    res.status(500).json({
      error:"Failed to fetch submissions"
    });

  }

};