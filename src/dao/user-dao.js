const UserModel = require("../model/user-model");
const UserDAO = {
  registerUser: (payload) => {
    return new UserModel({
      ...payload,
    }).save();
  },
  isUserExist: (payload) => {
    return UserModel.findOne({ email: payload.email });
  },
  comparePassword: (reqPassword, UserPassword) => {
    return reqPassword == UserPassword;
  },
};
module.exports = UserDAO;
