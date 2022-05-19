const FeeModel = require("../model/fee-model");
const FeeDAO = {
  Create: (payload) => {
    return new FeeModel({
      ...payload,
    }).save();
  },
  List: (orgId) => {
    return orgId ? FeeModel.find({ orgId }) : FeeModel.find();
  },
  Detail: (id) => {
    return FeeModel.find({ _id: id });
  },
};
module.exports = FeeDAO;
