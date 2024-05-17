const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db.connect.js");
const { errorHandler } = require("./middleware/errorHandle.js");
const registerRouter = require("./routes/user.routes");

const { PORT } = process.env;

const app = express();

app.use(express.json(), cors());

app.use("/api", registerRouter);

app.use( errorHandler);

app.listen(PORT || 5000, async () => {
  console.log("server connected at port :", PORT || 5000);
  await connectDB();
});
