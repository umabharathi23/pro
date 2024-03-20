import mongoose from "mongoose";
const Schema=mongoose.Schema
const task2=new Schema({
    topicName:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
   
    
    testType:{
        type:String,
        required:true
    },
    
    batch:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
   
})
export default mongoose.model('tasking',task2)