const { Router } = require("express");
const userModel=require("../models/user.model")
const noteModel=require("../models/notes.model")
const mongoose=require("mongoose")
require("dotenv").config()
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")

const getNotes=Router()

getNotes.get("/notes",async(req,res)=>{
    try {
        const token= req.headers.token;

        jwt.verify(token,"jksingh", async(err,decoded)=>{
        if(err){
            return res.send("please login again")
        }
        const x = await userModel.find({email:decoded.email})
        const {_id:id}=x[0]
        
        const userNotes =await noteModel.find({user_id:id},{user_id:0,_id:0})

        res.send(userNotes)
    })
        

    } 
    catch (error) {
        res.send("something went wrong")
    }
})


module.exports=getNotes