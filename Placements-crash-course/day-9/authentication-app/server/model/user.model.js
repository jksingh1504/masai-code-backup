const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, require: true },
  Role: { type: String, require: true },
  location: { type: String, require: true },
  password: { type: String, require: true },
});

const userModel = model("user", userSchema);
module.exports = userModel;
