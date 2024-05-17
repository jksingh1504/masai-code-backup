const mongoose = require("mongoose");

async function connectDB() {
  const { MONGO_URI } = process.env;
  console.log(MONGO_URI)
  await mongoose.connect(MONGO_URI);
}
module.exports = { connectDB };
