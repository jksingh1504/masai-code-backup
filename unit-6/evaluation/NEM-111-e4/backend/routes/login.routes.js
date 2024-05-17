const {Router}=require("express")
const userModel=require("../models/user.model")
require("dotenv").config()
const jwt=require("jsonwebtoken");
const becryptjs=require("bcryptjs")
require("dotenv").config()

const loginRoute=Router()

loginRoute.post("/login",async (req,res)=>{
    try {
        const {email,password:frontend_password}=req.body;
        const user=await userModel.find({email})
        // console.log(user)
        const {password:hash}=user[0]

        becryptjs.compare(frontend_password, hash, async function(err, result) {
            if(err){
                return res.send("invalid credentials hello")
            }
            if(result){
                const token=await jwt.sign({email},process.env.secret_key)
                
                return res.send({message:"login sucessful",token})
            }
            return res.send('invalid credentials')
        });
        
    } catch (err) {
        return res.send("invalid credentials hello" )
    }
})

module.exports=loginRoute