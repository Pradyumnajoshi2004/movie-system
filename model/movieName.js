const mongoose = require("mongoose")

const movieNameSchema= new mongoose.Schema({
    title:{
        type:String,
        required : true
    }
})

module.exports = mongoose.model("movieName",movieNameSchema)