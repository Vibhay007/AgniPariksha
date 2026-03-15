const TestCase = require("../models/TestCase");

exports.createTestCase = async (req, res) => {

  try {

    const testCase = new TestCase(req.body);

    await testCase.save();

    res.status(201).json(testCase);

  } catch (error) {

    res.status(500).json({ error: "Failed to create test case" });

  }

};