const Problem = require("../models/Problem");

exports.getProblems = async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getProblemById = async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    res.json(problem);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
exports.createProblem = async (req, res) => {

  try {

    const problem = new Problem(req.body);

    await problem.save();

    res.status(201).json(problem);

  } catch (error) {

    res.status(500).json({ error: "Failed to create problem" });

  }

};