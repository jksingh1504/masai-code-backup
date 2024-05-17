const { Router } = require("express");
const todoModel=require("../models/todos.model")
const userModel=require("../models/user.model")
require("dotenv").config()
const jwt=require("jsonwebtoken");
require("dotenv").config()

const getOnlyTodo=Router()

getOnlyTodo.get("/todos/:todoID",async(req,res)=>{
    try {
        const _id=req.params.todoID

        const token= req.headers.token;

        jwt.verify(token,process.env.secret_key, async(err,decoded)=>{
        if(err){
            return res.send("please login again")
        }
        const x = await userModel.find({email:decoded.email})
        const {_id:id}=x[0]
        
        const userTodos =await todoModel.find({user_id:id,_id},{user_id:0,_id:0})

        res.send(userTodos)
    })
        

    } 
    catch (error) {
        res.send("something went wrong")
    }
})


module.exports=getOnlyTodo