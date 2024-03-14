require('dotenv').config();
const express = require('express')
const app = express()
const router=require('./router/auth-router');
const connectdb=require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');


//he lihalywar apn aplya application madhe json cha use karu shakto
app.use(express.json());


//mhanje path chnage kara ani router file madhla content run karra khali jst na jata
///api/auth/--->new path ahe jyvar router run hotya run karycha asel tar /api/auth/ taka

app.use('/api/auth',router);

app.use(errorMiddleware);

const PORT=5000;

connectdb().then(()=>{
app.listen(PORT,()=>{
    console.log(` app listening on port ${PORT}`);
});
});