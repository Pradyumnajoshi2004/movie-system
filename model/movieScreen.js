const mongoose = require("mongoose")

const screenSchema = new mongoose.Schema({
    screenName : {
        type:String,
        required: true
    },
    movieName : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "movieName"
    }
})

module.exports = mongoose.model("moviescreen",screenSchema)