const express=require("express");
const mongoose=require("mongoose")
require("dotenv").config()
const signupRoute=require("./routes/signup.routes")
const loginRoute=require("./routes/login.routes")
const updateTodo=require("./routes/todos.update")
const getTodos=require("./routes/todos.get")
const createTodos=require("./routes/todos.create")
const deleteTodo=require("./routes/todos.delete")
const getOnlyTodo=require("./routes/todos.getOnlyTodo")
const cors=require("cors")

const app=express();

app.use(express.json());
app.use(cors())

app.post("/login",loginRoute);

app.post("/signup",signupRoute);

app.get("/todos",getTodos);

app.get("/todos/:todoID",getOnlyTodo)

app.post("/todos",createTodos)

app.patch("/todos/:Id",updateTodo);

app.delete("/todos/:Id",deleteTodo);


app.listen(process.env.port,async ()=>{
    try{
    await mongoose.connect(process.env.mongo_url)
    console.log("successfully connected to localhost:6000 and MongoDB")
    }
    catch(err){
        console.log(err)
    }
})