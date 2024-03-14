const User=require("../models/user-model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');


const JWT_SECRET="shekhar$goodbody";

//********home logic */
const home = async (req,res)=>{
    try {
        res.status(200).send('Hello World');
    } catch (error) {
        console.log(error);
    }
}

//***********registration logic *******//

const register =async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try{
        let user = await User.findOne({email:req.body.email});
        if(user){
          return res.status(400).json({error: "eamil with same eamil found"});
        }
        const salt =await bcrypt.genSaltSync(10);
        const secPass=await bcrypt.hash(req.body.password, salt);
    
         user=await User.create({
            user: req.body.name,
            email: req.body.email,
            password:secPass,
          });
    
          const data={
            user:{
              id:user.id
            }
          }
          const authtoken = jwt.sign(data, JWT_SECRET);
          res.json({authtoken});
        }
        catch(error){
          //  console.log(error.message);
          //  res.status(500).send("internal server error ");
          next(error);
        }
};


//***********login logic *************//

const login = async (req,res) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password}=req.body;
  try{
  let user = await User.findOne({email});
  if(!user){
    return res.status(400).json({error: "enter correct credentials"});
  }

  const passwordcompare=bcrypt.compare(password,user.password);
  if(!passwordcompare){
    return res.status(400).json({error: "enter correct credentials"});
  }
  const data={
    user:{
      id:user.id
    }
  }
  const authtoken = jwt.sign(data, JWT_SECRET);
  res.json({authtoken});
}
catch(error){
  console.log(error.message);
  res.status(500).send("internal server error ");
}
}
module.exports={home,register,login};
