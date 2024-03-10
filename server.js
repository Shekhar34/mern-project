const express = require('express')
const app = express()
const router=require('./router/auth-router');


//mhanje path chnage kara ani router file madhla content run karra khali jst na jata
///api/auth/--->new path ahe jyvar router run hotya run karycha asel tar /api/auth/ taka

app.use('/api/auth',router);


const PORT=5000;
app.listen(PORT,()=>{
    console.log(` app listening on port ${PORT}`);
})