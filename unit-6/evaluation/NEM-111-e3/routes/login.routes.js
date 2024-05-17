const {Router}=require("express")
const userModel=require("../models/user.model")
const mongoose=require("mongoose")
require("dotenv").config()
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")


const loginRoute=Router()

loginRoute.post("/login",async (req,res)=>{
    try {
        const {email,password:frontend_password}=req.body;

        const user=await userModel.find({email})
        const {password:hash}=user[0]

        bcrypt.compare(frontend_password, hash, async function(err, result) {
            // result == true
            if(err){
                // res.send(hash)
                return res.send("invalid credentials")
            }
            if(result){
                const token=await jwt.sign({email},"jksingh")
                
                return res.send({message:"login sucessful",token})
            }
            return res.send('invalid credentials')
        });
        
    } catch (err) {
        return res.send("invalid credentials")
    }
})

module.exports=loginRoute