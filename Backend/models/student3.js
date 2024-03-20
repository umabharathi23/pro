import mongoose from "mongoose";
const Schema=mongoose.Schema
const newstudent=new Schema({
    Name:{
        type:String,
        required:true
    },
   
    
   
})
export default mongoose.model('newstudent',newstudent)