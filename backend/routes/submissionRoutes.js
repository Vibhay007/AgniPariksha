const express = require("express");
const router = express.Router();

const { submitCode } = require("../controllers/submissionController");
const { getSubmissions } = require("../controllers/submissionController");

router.post("/", submitCode);
router.get("/:wallet", getSubmissions);

module.exports = router;