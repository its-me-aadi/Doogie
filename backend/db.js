require('dotenv').config();
const mongoose=require("mongoose");

const pass=process.env.DB_PASS;
const DB='mongodb+srv://itsadityasharma7124:'+pass+'@cluster0.rgyn6el.mongodb.net/Doogie?retryWrites=true&w=majority';
const mongoDB=async()=>{
    mongoose.connect(DB).then(()=>{
        console.log("successfully connected");
        const dogsDataSchema=new mongoose.Schema({    
        Breed:String,
        name:String,
        img:String,
        location:String
        });
        const dogsData= new mongoose.model('dogsData',dogsDataSchema);
        dogsData.find({})
        .then((foundlist)=>{
                global.dogsData=foundlist;   
        })
        const dogsBreedSchema=new mongoose.Schema({
            CategoryName:String
        });
        const dogsBreed=mongoose.model('breed',dogsBreedSchema);
        dogsBreed.find({})
        .then((foundlist)=>{
            global.dogsBreed=foundlist;
        });
    });
}


module.exports=mongoDB;