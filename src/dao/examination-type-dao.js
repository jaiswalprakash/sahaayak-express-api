const ExaminationTypeModel = require("../model/examination-type-model");
const ExaminationTypeDAO = {
  Create: (payload) => {
    return new ExaminationTypeModel({
      ...payload,
    }).save();
  },
  List: (orgId) => {
    return orgId
      ? ExaminationTypeModel.find({ orgId })
      : ExaminationTypeModel.find();
  },
  Detail: (id) => {
    return ExaminationTypeModel.find({ _id: id });
  },
};
module.exports = ExaminationTypeDAO;
