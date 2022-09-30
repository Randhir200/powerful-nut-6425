const mongoose = require("mongoose");
const validator = require("validator");
const User = new mongoose.Schema({
  name: { type: String, require: [true, "Require name"] },
  email: { type: String, require: [true, "Email is missing"] },
  Job_title: { type: String, default: "customer" },
  Phone: Number,
  password: { type: String, require: [true, "require password"] },
});
const UserModel = mongoose.model("user", User);

module.exports = {
  UserModel,
};
