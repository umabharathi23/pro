import mongoose from "mongoose";
const Schema=mongoose.Schema
const task1=new Schema({
    subject:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
   
    
    description:{
        type:String,
        required:true
    },
    
    batch:{
        type:String,
        required:true
    },
   
})
export default mongoose.model('tasks',task1)