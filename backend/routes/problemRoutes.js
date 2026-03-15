const express = require("express");
const router = express.Router();
const { createProblem } = require("../controllers/problemController");
const {
  getProblems,
  getProblemById
} = require("../controllers/problemController");

router.get("/", getProblems);
router.get("/:id", getProblemById);
router.post("/", createProblem);

module.exports = router;