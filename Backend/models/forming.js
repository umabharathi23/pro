import mongoose from "mongoose";
const Schema=mongoose.Schema
const forming=new Schema({
    topic:{
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
    }
    
})
export default mongoose.model('students',forming)