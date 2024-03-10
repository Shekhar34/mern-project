const mongoose = require('mongoose');

URI='mongodb://127.0.0.1:27017/mern_admin';



const connectdb=async()=>{
    try {
       await mongoose.connect(URI).then(() => console.log('Connected!'));
    } catch (error) {
        console.error("failed connection");
        process.exit(0);
    }
};

module.exports=connectdb;