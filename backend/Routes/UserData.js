const express=require("express");
const app=express();
const  User=require("../user");   // importing the form db Model

app.post("/userData",async(req,res)=>{
    console.log(req.body.email);
    await User.find({email:req.body.email})
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