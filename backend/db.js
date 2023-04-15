require('dotenv').config();
const mongoose=require("mongoose");

const pass=process.env.DB_PASS;
const DB='mongodb+srv://itsadityasharma7124:'+pass+'@cluster0.rgyn6el.mongodb.net/Zomato?retryWrites=true&w=majority';
const mongoDB=async()=>{
    mongoose.connect(DB).then(()=>{
        console.log("successfully connected");
        const foodlistSchema=new mongoose.Schema({    
        CategoryName:String,
        name:String,
        img:String,
        options:Array,
        description:String
        });
        const foodList= new mongoose.model('foodlist',foodlistSchema);
        foodList.find({})
        .then((foundlist)=>{
                    global.foodList=foundlist;             
        })
        const foodCategorySchema=new mongoose.Schema({
            CategoryName:String
        });
        const foodCategory=mongoose.model('foodCategory',foodCategorySchema);
        foodCategory.find({})
        .then((foundlist)=>{
            global.foodCategory=foundlist;
        })
    });
}

module.exports=mongoDB;