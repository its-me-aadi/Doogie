// const { type } = require("@testing-library/user-event/dist/type");
// const { application } = require("express");
const mongoose=require("mongoose");

const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNum:{
        type:Number,
        required:true
    },
   location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    dogData:{
        type:Object,
        required:true
    },
    status:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

});

const Form=mongoose.model('FormData',formSchema);
module.exports=Form;