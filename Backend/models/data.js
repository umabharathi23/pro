import mongoose from "mongoose";
const Schema=mongoose.Schema
const dataforming=new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    }
    
})
export default mongoose.model('dataform',dataforming)