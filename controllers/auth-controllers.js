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
 res.status(200).send('this is registration page');

} catch (error) {
    res.status(400).send({msg:"page not found"});
}
};

module.exports={home,register};
