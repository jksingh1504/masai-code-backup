const userModel = require("../model/user.model.js");

async function register(userDetails) {
  try {
    return await new userModel(userDetails).save();
  } catch (error) {
    throw error;
  }
}
async function authenticate(userCreds) {
  try {
    const userDetails = await userModel.findOne(userCreds);
    if (!userDetails) {
      throw "Invalid Credentials";
    }
    return { userDetails, token: "iowunvxzerlkroiwnsdlf" };
  } catch (error) {
    throw error;
  }
}
async function getUsers() {
  try {
    return await userModel.find();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  register,
  authenticate,
  getUsers,
};
