const mongoose=require("mongoose")

const todoSchema = new mongoose.Schema({
    taskname:{type:String,required:true},
    status:{type:String,default:"pending"},
    tag:{type:String,default:"personal"},
    user_id:{type:String,required:true}
})

const todoModel= mongoose.model("todo",todoSchema)

module.exports=todoModel