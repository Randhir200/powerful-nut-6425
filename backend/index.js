const express = require('express');
const connection = require('./config/db');
const cors = require('cors');
const { passport } = require('./config/google.auth');
const { UserModel } = require('./models/usermodel');
const { UserRoute } = require('./routes/user.route');
const projectRoute = require('./routes/projectRoute');
const ClientRouter = require('./routes/clientRouter');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/projects', projectRoute);
app.use('/clients', ClientRouter);
app.use('/user', UserRoute);
app.get('/', (req, res) => {
  res.send('<h1>hello everyone</h1>');
});

app.get('/data', async (req, res) => {
  let data = await UserModel.find();
  res.send({ data: data });
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log('connection established');
  } catch (error) {
    console.log(error);
  }
});
