const ParentModel = require("../model/parent-model");
const ParentDAO = {
  Create: async (payload) => {
    return await ParentModel.insertMany(payload);
  },
  List: (orgId) => {
    return orgId ? ParentModel.find({ orgId }) : ParentModel.find();
  },
};

module.exports = ParentDAO;
