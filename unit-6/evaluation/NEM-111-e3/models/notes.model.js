const mongoose=require("mongoose")

const noteSchema = new mongoose.Schema({
    Title:{type:String,required:true},
    Note:{type:String,required:true},
    Label:{type:String,required:true},
    user_id:{type:String,required:true}
})

const noteModel= mongoose.model("note",noteSchema)

module.exports=noteModel