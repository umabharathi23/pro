import mongoose from "mongoose";
const Schema=mongoose.Schema
const news=new Schema({
    name:{
        type:String,
        required:true
    },
   
    
})
export default mongoose.model('collect',news)
