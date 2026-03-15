const express = require("express");
const router = express.Router();

const { createTestCase } = require("../controllers/testCaseController");

router.post("/", createTestCase);

module.exports = router;