const AttendanceModel = require("../model/attendance-model");
const AttendanceDAO = {
  Create: async (payload) => {
    return await AttendanceModel.insertMany(payload);
  },
  List: (orgId) => {
    return orgId ? AttendanceModel.find({ orgId }) : AttendanceModel.find();
  },
  StudentAttendance: (payload) => {
    let criteria = { studentId: payload.studentId };
    if (payload.date) {
      criteria["attendanceDate"] = {
        $gte: payload.date.from,
        $lt: payload.date.to,
      };
    }
    if (payload.orgId) criteria["orgId"] = payload.orgId;
    console.log("criteria", criteria);
    return AttendanceModel.find(criteria);
  },
};

module.exports = AttendanceDAO;
