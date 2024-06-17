const express=require("express");
const mongoDB=require("./db");
const app=express();
mongoDB();


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();

});


app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/Form"));
app.use('/api',require("./Routes/displayApplications"));
app.use('/api',require("./Routes/displayAdoptions"));
app.use('/api',require("./Routes/UserData"));
app.use('/api',require("./Routes/UpdateUserInfor"));

app.get("/",(req,res)=>{
    res.send("Jay shree ram");
})
app.listen(5000,()=>{
    console.log("server strated at 5000");
})