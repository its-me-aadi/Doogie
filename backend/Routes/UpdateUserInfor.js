const express=require("express");
const app=express();
const  User=require("../user");   // importing the user db Model

app.post("/updateUserData",async(req,res)=>{
    try {
        await User.findOneAndUpdate({email:req.body.email},{
            name:req.body.name,
            email:req.body.email,
            location:req.body.location,
            dp:req.body.dp
        }).then(res.send({success:true}));
    } catch (error) {
        res.send({success:false})
    }
})

module.exports=app;