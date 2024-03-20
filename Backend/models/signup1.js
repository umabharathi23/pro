import mongoose from "mongoose";
const Schema=mongoose.Schema
const s1=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   
    
   
})
export default mongoose.model('sign',s1)