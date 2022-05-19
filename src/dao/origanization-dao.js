const OriganizationModel = require("../model/origanization-model");
const OriganizationDAO = {
  Create: (payload) => {
    return new OriganizationModel({
      ...payload,
    }).save();
  },
  List: () => {
    return OriganizationModel.find();
  },
  Detail: (id) => {
    return OriganizationModel.find({ _id: id });
  },
};
module.exports = OriganizationDAO;
