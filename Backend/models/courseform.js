// import mongoose from "mongoose";
// const Schema=mongoose.Schema
// const courseform=new Schema({
   
//     coursename:{
//         type: String,
//         required:true
//     }
   
// })
// export default mongoose.model('coursing',courseform );
import mongoose from "mongoose";
const Schema=mongoose.Schema
const courseform=new Schema({
   
    name:{
        type:String,
        required:true
    },
   
    phoneno:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    loan:{
        type:String,
        required:true  
    },
    loantype:{
        type:String,
        required:true  
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true  
    },
    occupation:{
        type:String,
        required:true  
    },
    
})
export default mongoose.model('coursing',courseform );
