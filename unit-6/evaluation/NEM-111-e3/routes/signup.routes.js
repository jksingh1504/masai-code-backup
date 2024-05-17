const { Router } = require("express");
const userModel=require("../models/user.model")
const mongoose=require("mongoose")
require("dotenv").config()
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")

const signupRoute = Router();

signupRoute.post("/signup",async (req,res)=>{
    try {

        const {email,password}=req.body

        bcrypt.hash(password, 10 ,async function(err, hash) {
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
        });


    } 
    catch (err) {
        return res.send("something went wrong")
    }
})






module.exports=signupRoute