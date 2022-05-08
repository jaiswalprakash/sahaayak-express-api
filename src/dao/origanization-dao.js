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
};
module.exports = OriganizationDAO;
