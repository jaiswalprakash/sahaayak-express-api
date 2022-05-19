const AttendanceModel = require("../model/attendance-model");
const AttendanceDAO = {
  Create: async (payload) => {
    return await AttendanceModel.insertMany(payload);
  },
  List: (origanization) => {
    if (origanization) return AttendanceModel.aggregate().match();
    else return AttendanceModel.find();
  },
};
module.exports = AttendanceDAO;
