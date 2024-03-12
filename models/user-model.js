const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
 username:{
    type:String,
    require:true,
 },
 email:{
    type:String,
    require:true,
 },
 phone:{
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

//secure password with bcrypt
userSchema.pre('save',async function(next) {
   console.log("pre method",this);
   const user=this;

   if(!user.isModified("password")){
         next();
   }
   try {
      var salt =await bcrypt.genSalt(10);
      const hash_password= await bcrypt.hash(user.password,salt);
      user.password=hash_password;
   } catch (error) {
      next(error);
   }
 });

//model first letter is always capital
const User = new mongoose.model('User', userSchema);

//first argument is collection name and second is userschema

module.exports=User;