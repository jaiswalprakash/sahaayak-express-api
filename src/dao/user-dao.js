const userModel = require("../model/user-model");
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
  list: () => {
    return userModel.find();
  },
  getById: (data) => {
    return userModel.findOne({ _id: data });
  },
};
module.exports = UserDAO;