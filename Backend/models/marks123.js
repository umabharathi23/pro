import mongoose from "mongoose";
const Schema=mongoose.Schema
const marks2=new Schema({
    marks:{
        type:Array,
        required:true
    },
    // technology:{
    //     type:String,
    //     required:true
    // },
    
    // subject:{
    //     type:String,
    //     required:true
    // },
   
})
export default mongoose.model('studentmarks',marks2)