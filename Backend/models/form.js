import mongoose from "mongoose";
const Schema=mongoose.Schema
const fs=new Schema({
    name:{
        type:String,
        required:true
    }
})
export default mongoose.model('forms',fs)