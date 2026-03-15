const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true
  },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem"
  },
  code: String,
  language: String,
  score: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Submission", submissionSchema);