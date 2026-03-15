const Submission = require("../models/Submission");

exports.getLeaderboard = async (req, res) => {

  try {

    const leaderboard = await Submission.aggregate([
      {
        $group: {
          _id: "$walletAddress",
          maxScore: { $max: "$score" }
        }
      },
      {
        $sort: { maxScore: -1 }
      },
      {
        $limit: 10
      }
    ]);

    res.json(leaderboard);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to fetch leaderboard"
    });

  }

};