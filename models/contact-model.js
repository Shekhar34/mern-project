const mongoose = require('mongoose');
const { Schema } = mongoose;


const contactSchema = new mongoose.Schema({
 name:{
    type:String,
    require:true,
 },
 email:{
    type:String,
    require:true,
 },
 message:{
    type:String,
    require:true,
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
const Contact = new mongoose.model('contact', contactSchema);

//first argument is collection name and second is userschema

module.exports=Contact;