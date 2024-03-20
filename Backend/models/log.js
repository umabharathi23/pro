import mongoose from "mongoose";
const Schema=mongoose.Schema
const log=new Schema({
    
    email:{
        type:String,
        required:true
    },

    
})
export default mongoose.model('logs',log)