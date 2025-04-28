const jwt = require("jsonwebtoken")

async function admin(req,res,next) {
    try {
        const token = req.header("auth_token")
        const data = await jwt.decode(token)
        console.log(data);
        req.user = data
        if(req.user.role != "admin") return res.status(500).json({errors:true,message:"you are not authorized"})

        next()
    
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
    
}

module.exports = admin