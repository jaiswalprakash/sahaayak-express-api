const userModel = require("../model/user-model");
const UserDAO = {
  registerUser: (payload) => {
    return new userModel({
      ...payload,
    }).save();
  },
  findOneByEmailOrUsername: (emailOrUsername) => {
    return userModel.findOne({
      $or: [{ email: emailOrUsername }, { userName: emailOrUsername }],
    });
  },
  isUserExist: (payload) => {
    return userModel.findOne({ email: payload.email });
  },
  comparePassword: (reqPassword, UserPassword) => {
    return reqPassword == UserPassword;
  },
  List: (orgId) => {
    return orgId ? userModel.find({ orgId }) : userModel.find();
  },
  getById: (_id) => {
    return userModel.findOne({ _id });
  },
  delete: (user) => {
    return userModel.deleteOne({ _id: user });
  },
};
module.exports = UserDAO;
