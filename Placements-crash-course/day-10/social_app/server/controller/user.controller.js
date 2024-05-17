const userServices = require("../services/user.services.js");

exports.register = (req, res, next) => {
  const { body } = req;
  userServices
    .register(body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};
exports.authenticate = (req, res, next) => {
  const { body } = req;
  userServices
    .authenticate(body)
    .then((data) => {
      res.body = data;
      next();
    })
    .catch((err) => next(err));
};
exports.getUsers = (req,res,next)=>{
  userServices
    .getUsers()
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
}