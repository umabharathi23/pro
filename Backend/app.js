//console.log("App running")
import express, { response } from 'express';
import mongoose from "mongoose";
//const express=require('require)
import bodyParser from "body-parser";
import cors from "cors";
import collection from "./models/file.js"
import dataforming from "./models/data.js";
import nodemailer from "nodemailer"
import multer from "multer"
import student123 from "./models/student";
import task1123 from "./models/task1123";
import task231 from "./models/task231";
import marks123 from "./models/marks123";

import studentslist from "./models/studentslist";
import task456 from "./models/task456";

import courseform from "./models/courseform.js";
import house from "./models/house.js";
import form  from "./models/form.js";
import log from "./models/log.js";
import signup from "./models/signup.js";
import files from './models/file.js';
import backend from "./models/backend.js";
import admin from "./models/admin.js";
//import student1 from './models/student1.js';
import hi from "./models/hi.js";
//import student2 from './models/student2.js';

const app=express(); 
// app.use(express.json())
// app.use('/api',(req,res,next)=>{
    // res.send("Fsd An Batch")
    // console.log("App running")
    app.use(bodyParser.json())// toget into json format
    app.use(cors())
    // to prevent security requests
    mongoose.connect('mongodb+srv://umabharathiyerubandi4518:bi2LA7rbBqEhDY67@cluster0.hhsxdhh.mongodb.net/DriveReady?retryWrites=true&w=majority')
    .then(()=>app.listen(2222))
    .then(()=>console.log("db connected successfully"))
    .catch((err)=>console.log(err));
    //app.use('/images',express.static('public/images'))
    app.post('/login', async (req, res) => {
        console.log(req.body)
        const { username, password } = req.body;
        try {
          const userdata = await user.findOne({ username, password });
          if (!userdata) {
            res.status(401).json({ message: 'Invalid' });
            return;
          }
          res.status(200).json({userdata});
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      });
    
    //    app.post('/addstudent',(req,res)=>{
         
          
    //       const{topicName,language,testType,date,batch,link}=req.body.formData
    //       const collectings=new student123({
    //           topicName,
    //           language,
    //           testType,
    //           date,
    //           batch,
    //           link

    //       })
    //       collectings.save()
    //       console.log(req.body.formData)
    //       return res.send({"students": collectings})
    //   })

//---tasks post
      app.post('/add-task',(req,res)=>{
         
          
        const{subject,topic,description,batch}=req.body
        const taskslist=new task1123({
            subject,
            topic,
            description,
            batch,

        })
        taskslist.save()
        // console.log(req.body.formData)
        return res.send({"tasks": taskslist})
    })



// tests posting
    app.post('/add-test',(req,res)=>{          
        const{topicName,language,testType,batch,date}=req.body
        const taskslist1=new task231({
            topicName,
            language,
            testType,
            batch,
            date
        })
        taskslist1.save()
        // console.log(req.body.formData)
        return res.send({"tasking": taskslist1})
    })


// students posting
    app.post('/add-students',(req,res)=>{          
        const{ marks1,
            marks2,
            marks3,
            marks4}=req.body
        const stud=new studentslist({
           marks1,
           marks2,
           marks3,
            marks4
        })
        stud.save()
        // console.log(req.body.formData)
        return res.send({"s123": stud})
    })







    app.post('/add-marks',(req,res)=>{          
        const{ marks,
            technology,
            subject,
            }=req.body
        const m=new studentslist({
            marks,
            technology,
            subject,
        })
        stud.save()
        // console.log(req.body.formData)
        return res.send({"marks": m})
    })



    app.get('/getmarks',async (req,res)=>{
        const tempdata=await marks123.find();
        return res.send(tempdata);
     })


// get tasks
    
    app.get('/gettasks',async (req,res)=>{
        const tempdata=await task1123.find();
        return res.send(tempdata);
     })

// get students
    app.get('/getstudents',async (req,res)=>{
        const tempdata=await studentslist.find();
        return res.send(tempdata);
     })
// get tests
app.get('/gettests',async (req,res)=>{
        const tempdata=await task231.find();
        return res.send(tempdata);
     })

     //get tasks by id

    app.get('/gettaskbyid/:id',async (req, res, next)=>{
        const _id = req.params.id
        let taskdata;
        try{
            taskdata= await task1123.findById({_id});
            console.log(taskdata)
        }catch(err){
            return console.log(err)
        }
        if(!taskdata){
            return res.status(400).json({message:"No event Found."})
        }
        return res.status(201).json({taskdata})
    })

     //get tests by id
    app.get('/gettestbyid/:id',async (req, res, next)=>{
        const _id = req.params.id
        let testdata;
        try{
            testdata= await task231.findById({_id});
            console.log(testdata)
        }catch(err){
            return console.log(err)
        }
        if(!testdata){
            return res.status(400).json({message:"No event Found."})
        }
        return res.status(201).json({testdata})
    })

   //----edit task by id
    app.put('/update-task/:id', async (req, res, next)=>{
        const _id = req.params.id
        const {subject,topic,description,batch} = req.body;
        let taskdata;
        try{
            taskdata = await task1123.findByIdAndUpdate(_id,{
                subject,
                topic,
                description,
                batch
                
            });
        }catch(err){
            return console.log(err)
        }
        if(!taskdata){
            return res.status(400).json({message:"Unable to update the users."})
        }
        return res.status(200).json({taskdata})
         }
    )
    
    //edit tests by update
    app.put('/update-test/:id', async (req, res, next)=>{
        const _id = req.params.id
        const {topicName,language,testType,batch,date} = req.body;
        let taskdata;
        try{
            testdata = await task231.findByIdAndUpdate(_id,{
                topicName,language,testType,batch,date 
            });
        }catch(err){
            return console.log(err)
        }
        if(!taskdata){
            return res.status(400).json({message:"Unable to update the users."})
        }
        return res.status(200).json({taskdata})
    }
    )



    
    
     //---delete by id for tasks
    app.delete('/deleteevent/:id', async (req, res, next) => {
        //const eventId = req.params.id;
        console.log(req.params.id)
        task1123.findByIdAndDelete(req.params.id)
        .then(res => {
            res.send("deleted")
        })
        .catch(err => { 
            res.send("not deleted")
        })
      })

      

   
    app.get('/geteventbyid/:id',async (req, res, next)=>{
        const _id = req.params.id
        let taskdata;
        try{
            taskdata= await task1123.findById({_id});
            console.log(taskdata)
        }catch(err){
            return console.log(err)
        }
        if(!taskdata){
            return res.status(400).json({message:"No event Found."})
        }
        return res.status(201).json({taskdata})
})


app.get('/geteventbyid/:id',async (req, res, next)=>{
    const _id = req.params.id
    let testdata;
    try{
        testdata= await task231.findById({_id});
        console.log(testdata)
    }catch(err){
        return console.log(err)
    }
    if(!testdata){
        return res.status(400).json({message:"No event Found."})
    }
    return res.status(201).json({testdata})
})

app.put('/updateevent/:id', async (req, res, next)=>{
    const _id = req.params.id
    const { topicName,
        language,
        testType,
        batch,
        date} = req.body.formdata;
    let markdata;
    try{
        markdata = await task1123.findByIdAndUpdate(_id,{
            topicName,
            language,
            testType,
            batch,
            date
            
        });
    }catch(err){
        return console.log(err)
    }
    if(!markdata){
        return res.status(400).json({message:"Unable to update the users."})
    }
    return res.status(200).json({markdata})
     }
)
//---delete by id for tests
app.delete('/deleteevent/:id', async (req, res, next) => {
    //const eventId = req.params.id;
    console.log(req.params.id)
    task231.findByIdAndDelete(req.params.id)
    .then(res => {
        res.send("deleted")
    })
    .catch(err => { 
        res.send("not deleted")
    })
  })


  //Marks 

// Set storage engine for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/"); // Destination folder for storing uploaded files
    },
    filename: function (req, file, cb) {
      // Rename uploaded file (optional)
      cb(null, file.fieldname + "_" + Date.now() + ".csv");
    },
  });
  
  // Initialize multer
  const upload = multer({ 
    storage: storage,
    limits: { fileSize: 1000000 }, // Limit file size (optional)
    fileFilter: function (req, file, cb) {
      // Filter files (optional)
      checkFileType(file, cb);
    },
  });
  
  // Check File Type (optional)
  function checkFileType(file, cb) {
    // Allowed extensions
    const filetypes = /csv/;
    // Check extension
    const extname = filetypes.test(file.originalname.toLowerCase());
    // Check MIME type
    const mimetype = filetypes.test(file.mimetype);
  
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb("Error: CSV files only!");
    }
  }



  app.post("/upload-csv", upload.single("myfile"), (req, res) => {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
  
    // Log file details
    console.log("Uploaded file:", req.file);
  
    // Parse uploaded CSV file and save data to MongoDB
    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        // Save parsed data to MongoDB
        marks123.insertMany(results)
          .then(() => {
            console.log("CSV data uploaded successfully");
            res.status(200).send("File uploaded and data saved to database.");
          })
          .catch((error) => {
            console.error("Error uploading CSV data:", error);
            res.status(500).send("Internal server error.");
          });
      });
  });
  // End Marks












      
      app.get('/getdatas',async (req,res)=>{
         const tempdata=await student123.find();
         return res.send(tempdata);
      })
       

    
