const mongoose = require('mongoose');
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


//model first letter is always capital
const User = new mongoose.model('User', userSchema);

//first argument is collection name and second is userschema

module.exports=User;