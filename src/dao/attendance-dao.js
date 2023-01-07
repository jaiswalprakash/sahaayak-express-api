const AttendanceModel = require("../model/attendance-model");
const AttendanceDAO = {
  Create: (payload) => {
    return AttendanceModel.insertMany(payload);
  },
  List: (orgId) => {
    return orgId ? AttendanceModel.find({ orgId }) : AttendanceModel.find();
  },
  StudentAttendance: (payload) => {
    let criteria = { studentId: payload.studentId };
    if (payload.date) {
      criteria["attendanceDate"] = {
        $gte: new Date(payload.date.from),
        $lte: new Date(payload.date.to),
      };
    }
    if (payload.orgId) criteria["orgId"] = payload.orgId;
    let res = AttendanceModel.find(criteria);
    return res;
  },
};

module.exports = AttendanceDAO;
