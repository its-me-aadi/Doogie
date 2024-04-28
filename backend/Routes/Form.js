const express=require("express");
const app=express();
const  Form=require("../form");   // importing the form db Model

app.post("/saveFormData",
    async(req, res) => {
      try{
        await Form.create({
            name:req.body.name,
            phoneNum:req.body.phoneNum,
            location:req.body.location,
            email:req.body.email,
            dogData:req.body.dogData,
            status:"Pending"
          }).then(res.json({success:true}));       
      }
      catch(err){
        console.log(err);
        res.json({success:false});
      } 
    }
     
);




module.exports=app;