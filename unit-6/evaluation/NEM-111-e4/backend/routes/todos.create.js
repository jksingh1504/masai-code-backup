const { Router } = require("express");
const userModel=require("../models/user.model")
const todoModel=require("../models/todos.model")
require("dotenv").config()
const jwt=require("jsonwebtoken");
require("dotenv").config()

const createTodos=Router()

createTodos.post("/todos",async (req,res)=>{
    try {
        console.log(token)
        const token= req.headers.token;

        jwt.verify(token,process.env.secret_key, async(err,decoded)=>{
            
                if(err){
                    return res.send("please login again")
                }
                const x = await userModel.find({email:decoded.email})
                const {_id:id}=x[0]
                
                try{
                    const newTodo= await new todoModel({...req.body,user_id:id})
                    newTodo.save()
                    res.send(req.body);
                }
                catch (Err) {
                    res.send(Err)
                }
            
            
        
    })


    } catch (error) {
        res.send("something went wrong")
    }
})


module.exports=createTodos