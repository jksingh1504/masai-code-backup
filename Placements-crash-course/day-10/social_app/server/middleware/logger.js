const fs = require("fs");

function logger(req, res, next) {
  try {
    console.log(res.body, "hello");
    const { username, email } = req.body;
    fs.appendFileSync("./log.txt", `username:${username}, email: ${email}\n`);
    return res.status(200).json(res.body);
  } catch (error) {
    next(error);
  }
}
module.exports = { logger };
