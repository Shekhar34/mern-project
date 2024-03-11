const User=require("../models/user-model");

//********home logic */
const home = async (req,res)=>{
    try {
        res.status(200).send('Hello World');
    } catch (error) {
        console.log(error);
    }
}


///***********registration logic */
const register =async(req,res)=>{
try {
    console.log(req.body);
    const {username,email,phone,password}=req.body;
    const userExists=await User.findOne({email:email});

    if(userExists){
        return res.status(400).json({msg:"email already exists"});
    }

    //to create user
    await User.create({username,email,phone,password});
    res.status(200).send({data});

} catch (error) {
    res.status(400).send({msg:"page not found"});
}
};

module.exports={home,register};
