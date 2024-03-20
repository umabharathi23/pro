import mongoose from "mongoose";
const Schema=mongoose.Schema
const newSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'student'
    }
    
})
export default mongoose.model('use',newSchema)
// admin@gmail.com , 1234 , admin
// student1@gmail.com , 1234 , student
// student2@gmail.com , 1234 , student

// let usersdata = users.findOne({email,password})
//usersdata.role === 'admin'
//usersdata.role === 'student'
