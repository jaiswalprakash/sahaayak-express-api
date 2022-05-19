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
};
module.exports = StudentDAO;
