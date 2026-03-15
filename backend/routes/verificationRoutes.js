const express = require("express");
const router = express.Router();

const { verifySkills } = require("../controllers/verificationController");

router.get("/:wallet", verifySkills);

module.exports = router;