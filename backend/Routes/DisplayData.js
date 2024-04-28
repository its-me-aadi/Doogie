const express=require("express");
const app=express();

app.post("/dogsData",(req,res)=>{
    try {
        res.send([global.dogsData,global.dogsBreed]);
    } catch (error) {
        console.error(error.message)
    }
})

module.exports=app;