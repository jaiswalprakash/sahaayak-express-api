const StudentModel = require("../model/student-model");
const StudentDAO = {
  Create: (payload) => {
    return new StudentModel({
      ...payload,
    }).save();
  },
  List: () => {
    return StudentModel.find();
  },
};
module.exports = StudentDAO;
