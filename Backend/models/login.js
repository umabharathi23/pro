import mongoose from "mongoose";
const Schema=mongoose.Schema
const student2=new Schema({
    email:{
        type:String,
        required:true
    },
   
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'student'
    }
    
})
export default mongoose.model('creation',student2)