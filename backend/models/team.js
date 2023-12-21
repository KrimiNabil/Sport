// import mongoose module
const mongoose = require("mongoose");
const teamSchema = mongoose.Schema({
    nameTeam:String,
    fundation:Number,
    staduim:String,
    owner:String,
    players: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player"
      }]
     
});
// create Model Name "Team"
const team = mongoose.model("Team", teamSchema);
// make team exportable
module.exports = team;
