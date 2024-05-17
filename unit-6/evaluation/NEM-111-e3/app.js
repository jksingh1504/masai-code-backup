const express=require("express");
const noteModel=require("./models/notes.model")
const userModel=require("./models/user.model")
const mongoose=require("mongoose")
require("dotenv").config()
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt")
const signupRoute=require("./routes/signup.routes")
const loginRoute=require("./routes/login.routes")
const updateNotes=require("./routes/notes.update")
const getNotes=require("./routes/notes.get")
const createNotes=require("./routes/notes.create")
const deleteNotes=require("./routes/notes.delete")

const app=express();

app.use(express.json());

app.post("/login",loginRoute)

app.post("/signup",signupRoute)

app.get("/notes",getNotes)

app.post("/notes/create",createNotes)

app.patch("/notes/:Id",updateNotes)

app.delete("/notes/delete",deleteNotes)


app.listen(3000,async ()=>{
    try{
    await mongoose.connect(process.env.mongo_url)
    console.log("successfully connected to localhost:3000 and MongoDB")
    }
    catch(err){
        console.log(err)
    }
})