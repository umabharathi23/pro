import mongoose from "mongoose";
const Schema=mongoose.Schema
const f=new Schema({
    name:{
        type:String,
        required:true
    }
    
    
})
export default mongoose.model('collecting',f)
