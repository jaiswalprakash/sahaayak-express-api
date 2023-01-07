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
      .populate("parents", "-_id name email phoneNumber relation")
      .populate("grade", "-_id name");
  },
  studentList: (orgId, grade) => {
    return studentModel.find(
      { orgId, grade },
      { firstName: 1, middleName: 1, surName: 1 }
    );
  },
};
module.exports = StudentDAO;
