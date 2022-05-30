const ResultModel = require("../model/result-model");
const ResultDAO = {
  Create: async (payload) => {
    return await ResultModel.insertMany(payload);
  },
  List: (orgId) => {
    return ResultModel.find({ orgId })
      .populate(
        "student",
        "address firstName middleName surName DOB gender parents StudentImgURL"
      )
      .populate({
        path: "student",
        populate: {
          path: "parents",
          select: { name: 1, email: 1, phoneNumber: 1, relation: 1 },
        },
      })
      .populate("grade", "name")
      .populate("examinationType", "name");
  },
};

module.exports = ResultDAO;
