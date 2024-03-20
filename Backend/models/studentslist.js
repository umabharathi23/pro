import mongoose from "mongoose";
const Schema=mongoose.Schema
const st=new Schema({
    marks1:{
        type:String,
        required:true
    },
    marks2:{
        type:String,
        required:true
    },
   
    
    marks3:{
        type:String,
        required:true
    },
    
    marks4:{
        type:String,
        required:true
    },
   
})
export default mongoose.model('s123',st)