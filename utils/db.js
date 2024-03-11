const mongoose = require('mongoose');


//to secure the password
const URI=process.env.MONGODB_URI;

const connectdb=async()=>{
    try {
       await mongoose.connect(URI).then(() => console.log('Connected!'));
    } catch (error) {
        console.error("failed connection");
        process.exit(0);
    }
};

module.exports=connectdb;