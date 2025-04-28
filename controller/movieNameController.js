const MovieName = require("../model/movieName")

exports.getMovieName = async (req,res) => {
    try {
        const data = await MovieName.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postMovieName = async (req,res) => {
    try {
        const isMovieExists = await MovieName.findOne({title : req.body.title})
        if(isMovieExists) return res.status(500).json({errors:true , message : "the movie already in movielist"})

        const data = await MovieName.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateMovieName = async (req,res) => {
    try {
        const data = await MovieName.findOneAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteMovieName = async (req,res) => {
    try {
        const data = await MovieName.findOneAndDelete(req.params.id)
        return res.json({errors:false,data : data })
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}