const AttendanceDAO = require("../dao/attendance-dao");
const CONSTANT = require("../utils/constant");

const AttendanceService = {
  MarkAttendance: (payload) => {
    return new Promise((resolve, reject) => {
      payload.data.map((e) => {
        e["attendanceDate"] = payload.date;
        e["orgId"] = payload.orgId;
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
  List: (orgId = null) => {
    return new Promise((resolve, reject) => {
      AttendanceDAO.List(orgId)
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
  StudentAttendance: (payload) => {
    return new Promise((resolve, reject) => {
      AttendanceDAO.StudentAttendance(payload)
        .then((result) => {
          let response = {
            numberOfDay:
              Math.round(
                (new Date(payload.date.to) - new Date(payload.date.from)) /
                  (1000 * 60 * 60 * 24)
              ) || 0,
            presentDay:
              result.filter((el) => el.attendenceStatus === "PRESENT").length ||
              0,
            absentDay:
              result.filter((el) => el.attendenceStatus === "ABSENT").length ||
              0,
          };
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
            message: CONSTANT.MESSAGE.COMMON.DATA_FOUND,
            data: response,
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
