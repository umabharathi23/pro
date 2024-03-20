import mongoose from "mongoose";
const Schema=mongoose.Schema
const hi=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    phoneno:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    //loan:{
        //type:String,
        //required:true
    //}
})
export default mongoose.model('loans',hi)