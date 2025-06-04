const MovieUser = require("../model/movieUser")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getMovieUser = async (req,res) => {
    try {
        const data = await MovieUser.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postMovieUser = async (req,res) => {
    try {
        const isUserExists = await MovieUser.findOne({email : req.body.email})
        if(isUserExists) return res.status(500).json({errors:true,message:"the user already exists"})

        req.body.password =await bcrypt.hash(req.body.password,10)
        const data = await MovieUser.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res) => {
    try {
        const isUserExists = await MovieUser.findOne({email : req.body.email})
        if(!isUserExists) return res.status(500).json({errors:true,message:"the email or password invalid"})

        const verifyPassword = await bcrypt.compare(req.body.password,isUserExists.password)
        if(!verifyPassword) return res.json({errors:true,message:"the email or password is invalid"})

        const token = await jwt.sign({_id:isUserExists._id,role:isUserExists.role},process.env.SEC)
        return res.json({errors:false,data:{token:token , user:isUserExists}})

    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.updateUser = async (req,res) => {
    try {
        const data = await MovieUser.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const data = await MovieUser.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}