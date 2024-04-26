import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

//this function will protect routes by verifying req with jwt
//to check user using right token and input.
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        
        if(!token){
            return res.status(401).json({error: "Unauthorized - No token provided"})
        }

        //process.env.JWT_SECRET is to sign the jwt
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        //check if the token is valid token or not
        if(!decoded){
            return res.status(401).json({error: "Invalid Token"})
        }

        //useId is from 'generateToken'. 
        //remove password column
        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.staus(401).json({error: "User not found"})
        }
        
        //userId becomes req.use._id
        req.user = user

        // next function is from 'message'routes.js' 
        // and it called next function after protectRoutes in post fucntion.
        next()
       
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message)
        res.status(500).json({error: "Internal server error"})
    }
}

export default protectRoute