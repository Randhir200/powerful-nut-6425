const mongoose = require('mongoose');
const DB = `mongodb+srv://randhir:mongo2022@cluster0.lam2rvb.mongodb.net/everhour-clone?retryWrites=true&w=majority`;
const connection = async () => {
  return mongoose.connect(
    `mongodb+srv://randhir:mongo2022@cluster0.lam2rvb.mongodb.net/everhour-clone?retryWrites=true&w=majority`
  );
};
module.exports = connection;
