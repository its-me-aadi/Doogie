const express=require("express");
const app=express();
const  Form=require("../form");   // importing the form db Model

app.post("/adoptionsData",async(req,res)=>{
    await Form.find({email:req.body.email,status:"Accepted"})
        .then((foundlist)=>{
            global.foundData=foundlist;
        });
    try {
        res.send([global.foundData]);
    } catch (error) {
        console.error(error.message)
    }
})

module.exports=app;

