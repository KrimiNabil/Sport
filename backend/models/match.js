// import mongoose module

const mongoose=require("mongoose");

// 
const matchSchema=mongoose.Schema({
    scoreOne:Number,
    scoreTwo:Number,
    teamOne:String,
    teamTwo:String,
}); 
// creat Match Model
const match = mongoose.model("Match",matchSchema);
// export match
module.exports=match;