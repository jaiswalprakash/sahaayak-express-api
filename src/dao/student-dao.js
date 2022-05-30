const studentModel = require("../model/student-model");
const StudentModel = require("../model/student-model");
const StudentDAO = {
  Create: (payload) => {
    return new StudentModel({
      ...payload,
    }).save();
  },
  List: (orgId) => {
    return orgId ? StudentModel.find({ orgId }) : StudentModel.find();
  },
  studentInfo: (orgId, uuid) => {
    return studentModel
      .findOne({ orgId, uuid })
      .populate("parents", "name email phoneNumber relation")
      .populate("grade", "name");
  },
};
module.exports = StudentDAO;
