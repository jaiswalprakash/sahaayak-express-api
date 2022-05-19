const GradeModel = require("../model/grade-model");
const GradeDAO = {
  Create: (payload) => {
    return new GradeModel({
      ...payload,
    }).save();
  },
  List: (orgId) => {
    return orgId ? GradeModel.find({ orgId }) : GradeModel.find();
  },
  Detail: (id) => {
    return GradeModel.find({ _id: id });
  },
};
module.exports = GradeDAO;
