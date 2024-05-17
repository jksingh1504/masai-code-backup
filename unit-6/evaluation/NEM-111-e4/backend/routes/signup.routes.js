const { Router } = require("express");
const userModel=require("../models/user.model")
require("dotenv").config()
const bcryptjs=require("bcryptjs")

const signupRoute = Router();

signupRoute.post("/signup",async (req,res)=>{
    try {

        const {email,password}=req.body

        bcryptjs.genSalt(10, (err,salt)=>{
            if(err){
                return res.send("something went wrong")
            }
            bcryptjs.hash(password, salt ,async function(err, hash) {
                if(err){
                    return res.send("something went wrong")
                }
                else{
                    try {
                        await new userModel({email,password:hash}).save()
                        return res.send("signup sucessfull")
                    } catch (error) {
                        return res.send("something went wrong")
                    }
                    
                }
            })
        })
        ;


    } 
    catch (err) {
        return res.send("something went wrong")
    }
})






module.exports=signupRoute