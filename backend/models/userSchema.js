const mongoose = require("mongoose");
const useSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
},{timestamps: true})

const userModel = new mongoose.model("User",useSchema )
module.exports = userModel