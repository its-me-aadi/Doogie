const express=require("express");
const app=express();
const  User=require("../user");   // importing the User db Model
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcrypt");
const saltRounds=10;
const jwt =require("jsonwebtoken"); 
const jwtSecret="Secret";

app.post("/createuser",
    [body('email').isEmail(),
    body('name','Small username').isLength({ min: 5 }),
    // password must be at least 5 chars long
    body('password','Small password').isLength({ min: 5 })],
    async(req, res) => {
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try{
        bcrypt.hash(req.body.password, saltRounds, async(err, hash)=> {
          await User.create({
            name:req.body.name,
            password:hash,
            location:req.body.location,
            email:req.body.email
  
          }).then(res.json({success:true}));
      });
       
      }
      catch(err){
        console.log(err);
        res.json({success:false});
      } 
    }
     
);

app.post("/login",
    [body('email').isEmail(),
    body('password','Small password').isLength({ min: 5 })]
,async(req, res) => {
  const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  const password=req.body.password;
  const email=req.body.email;
  User.findOne({email:email})
      .then((foundUser)=>{
        if(foundUser){
          bcrypt.compare(password,foundUser.password, function(err, result) {
            if(result){
              const data={
                user:{
                  id:foundUser.id
                }
              }
              const authToken=jwt.sign(data,jwtSecret);
              res.json({success:true,authToken:authToken});
            }
            else{
              return res.status(400).json({errors: "Try logging in with correct password"});
            }

        });
          
        }
        else{
          return res.status(400).json({errors: "Try logging in with correct email"});
        }

      })
      .catch(err=>{
          console.log(err);
          res.json({success:false});
      })
     
  });


module.exports=app;