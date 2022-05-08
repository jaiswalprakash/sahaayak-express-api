const GradeModel = require("../model/grade-model");
const GradeDAO = {
  Create: (payload) => {
    return new GradeModel({
      ...payload,
    }).save();
  },
  List: () => {
    return GradeModel.find();
  },
};
module.exports = GradeDAO;
