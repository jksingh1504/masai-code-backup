const Router = require("express");
const userController = require("../controller/user.controller.js");
const { logger } = require("../middleware/logger.js");

const route = Router();

route.post("/user/register", userController.register);
route.post("/user/authenticate", userController.authenticate, logger);
route.get("/user",userController.getUsers)

module.exports = route;
