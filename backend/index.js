const express = require('express');
const app = express();
const connection = require('./config/db');


const port = process.env.PORT || 7000;
app.listen(port,async ()=>{
    try{
       await connection();
       console.log('connection established')
    }catch(e){
        console.log(e)
    }
})