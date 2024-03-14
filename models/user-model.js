const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET="shekhar$goodbody";
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
 user:{
    type:String,
    require:true,
 },
 email:{
    type:String,
    require:true,
 },
 password:{
    type:String,
    require:true,
 },

 isAdmin:{
    type:Boolean,
    default:false,
 },

});

//json web token

const fetchuser=(req,res,next)=>{
   //get user from jwttoken
   const token = req.token('auth-token');
   if(!token){
       res.status(401).send({Error:"please authentictae using valid token"});
   }
   try {
       const data=jwt.verify(token,JWT_SECRET);
       req.user=data.user;
       next(); 
   } catch (error) {
       res.status(401).send({Error:"please authentictae using valid token"});
   }
}

//model first letter is always capital
const User = new mongoose.model('User', userSchema);

//first argument is collection name and second is userschema

module.exports=User;