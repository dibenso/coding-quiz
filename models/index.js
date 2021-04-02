const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({ score: "Number", initials: "String" });
const Score = new mongoose.model("Workout", ScoreSchema);

module.exports = { Score };