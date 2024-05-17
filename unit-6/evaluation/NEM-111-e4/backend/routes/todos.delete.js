const { Router } = require("express");
const userModel=require("../models/user.model")
const todoModel=require("../models/todos.model")
require("dotenv").config()
const jwt=require("jsonwebtoken");
require("dotenv").config()


const deleteTodo=Router()


deleteTodo.delete("/todos/:Id",async(req,res)=>{
    try {
        const token= req.headers.token;
        const Id=req.params.Id

        jwt.verify(token,process.env.secret_key, async(err,decoded)=>{
        if(err){
            return res.send("please login again")
        }
        const x = await userModel.find({email:decoded.email})
        const {_id:id}=x[0]
        
        await todoModel.deleteMany({user_id:id,_id:Id},{user_id:0,_id:0})

        res.send("{}")
    })

        
    } catch (error) {
        res.send("something went wrong")
    }
})





module.exports=deleteTodo