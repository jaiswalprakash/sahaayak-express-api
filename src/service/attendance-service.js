const AttendanceDAO = require("../dao/attendance-dao");
const CONSTANT = require("../utils/constant");
const AttendanceService = {
  MarkAttendance: (payload) => {
    return new Promise((resolve, reject) => {
      payload.data.map((e) => {
        e["attendanceDate"] = payload.date;
      });
      AttendanceDAO.Create(payload.data)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.CREATED,
            message: CONSTANT.MESSAGE.ATTENDANCE.MARKED,
            data: result,
          });
        })
        .catch((error) => {
          reject({
            status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
            message: error,
          });
        });
    });
  },
  List: () => {
    return new Promise((resolve, reject) => {
      let origanization = 1;
      AttendanceDAO.List(origanization)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
            message: CONSTANT.MESSAGE.COMMON.DATA_FOUND,
            data: result,
          });
        })
        .catch((error) => {
          reject({
            status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
            message: error,
          });
        });
    });
  },
};

module.exports = AttendanceService;
