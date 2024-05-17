const { Router } = require("express");
const userModel=require("../models/user.model")
const noteModel=require("../models/notes.model")
const mongoose=require("mongoose")
require("dotenv").config()
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")

const updateNotes=Router()


updateNotes.patch("/notes/:Id",async(req,res)=>{
    const {Id}=req.params
    try {
        const token= req.headers.token;

        jwt.verify(token,"jksingh", async(err,decoded)=>{
        if(err){
            return res.send("please login again")
        }
        const x = await userModel.find({email:decoded.email})
        const {_id:id}=x[0]
        
        const userNotes =await noteModel.updateOne({user_id:id,_id:Id},{$set:{...req.body}})

        res.send({...req.body})
    })


    }
     catch (error) {
        res.send("something went wrong")
    }
})

module.exports=updateNotes