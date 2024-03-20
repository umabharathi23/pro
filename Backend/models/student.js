import mongoose from "mongoose";
const Schema=mongoose.Schema
const student=new Schema({
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
    date:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
   
})
export default mongoose.model('students123',student)