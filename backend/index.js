const express = require('express');
const app = express();
const connection = require('./config/db');
const projectRoute = require('./routes/projectRoute')

app.use(express.json());
app.use('/projects', projectRoute)


const port = process.env.PORT || 7000;
app.listen(port,async ()=>{
    try{
       await connection();
       console.log('connection established')
    }catch(e){
        console.log(e)
    }
})