const express=require("express");
const app=express();

app.post("/foodData",(req,res)=>{
    try {
        res.send([global.foodList,global.foodCategory]);
    } catch (error) {
        console.error(error.message)
    }
})

module.exports=app;