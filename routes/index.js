const router = require("express").Router();
const { Score } = require("../models");

router.post("/api/scores", async (req, res) => {
  try {
    const { score, initials } = req.body;
    const newScore = new Score({ score, initials });

    await newScore.save();
    
    const scores = await Score.find();

    res.json(scores);
  } catch(error) {
    res.sendStatus(500);

    throw error;
  }
});

module.exports = router;