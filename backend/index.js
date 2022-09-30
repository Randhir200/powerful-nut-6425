const express = require('express');
const app = express();
const connection = require('./config/db');
const projectRoute = require('./routes/projectRoute');
const ClientRouter = require('./routes/clientRouter');
app.use(express.json());
// <<<<<<< HEAD
app.use('/projects', projectRoute)
app.use('/clients', ClientRouter)

app.get("/",(req,res)=>{
    res.send("homepage")
})

// =======
app.use('/projects', projectRoute);
app.use('/clients', ClientRouter);
// >>>>>>> a5c5c31b7207c2499864554b95788f4074fab519
const port = process.env.PORT || 7000;
app.listen(port, async () => {
  try {
    await connection();
    console.log('connection established');
  } catch (e) {
    console.log(e);
  }
});
