// import mongoose module
const mongoose = require("mongoose");
const playerSchema = new mongoose.Schema({
name: String,
nbr: Number,
age: Number,
team: {
type: mongoose.Schema.Types.ObjectId,
ref: 'Team'
}
});
// create Model Name "Player"
const player = mongoose.model("Player", playerSchema);
// make player exportable
module.exports = player;