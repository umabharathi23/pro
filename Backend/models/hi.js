import mongoose from "mongoose";
const Schema=mongoose.Schema
const hi=new Schema({
    Name:{
        type:String,
        required:true
    },
   
    
   
})
export default mongoose.model('newhi',hi)