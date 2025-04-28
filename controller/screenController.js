const Screen = require("../model/movieScreen")


exports.getScreen = async (req,res) => {
    try {
        const data = await Screen.find().populate("movieName")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postScreen = async (req,res) => {
    try {
        const isScreenExists = await Screen.findOne({screenName : req.body.screenName})
        if(isScreenExists) return res.status(500).json({errors:true,message:"the screen is already exists"})

        const data =await Screen.create(req.body)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateScreen = async (req,res) => {
    try {
        const data = await Screen.findByIdAndDelete( req.params.id,req.body,{new:true})
        res.json({errors:false,data:data})

    } catch (error) {
        return res.stats(500).json({errors:true,message:error.message})
    }
    
}

exports.deleteScreenn = async (req,res) => {
    try {
        const data = await Screen.findByIdAndDelete(req.params.id)
        res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}