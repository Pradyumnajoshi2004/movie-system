const jwt = require("jsonwebtoken")

async function auth(req,res,next) {
    try {
            const token = req.header("auth_token")

            const verifyToken =await jwt.verify(token,process.env.SEC)
            if(!verifyToken) return res.status(500).json({errors:true,message:"the token is not verified"})     
            
            next()
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

module.exports = auth