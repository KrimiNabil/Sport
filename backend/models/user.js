// import mongoose module
const mongoose = require("mongoose");
// creat user schema
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    pwd:String,
    role:String,
    avatar:String
});

// create User model
const user = mongoose.model("User",userSchema);

// make user exportable

module.exports = user;

// all the above steps will be always repeted when creating new modules
