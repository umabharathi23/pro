import mongoose from "mongoose";
const Schema=mongoose.Schema
const marks2=new Schema({
    student1:{
        type:String,
        required:true
    },
    student2:{
        type:String,
        required:true
    },
   
    
    student3:{
        type:String,
        required:true
    },
    
    student4:{
        type:String,
        required:true
    },
   
})
export default mongoose.model('marks',marks2)