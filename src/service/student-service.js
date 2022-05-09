const StudentDAO = require("../dao/student-dao");
const CONSTANT = require("../utils/constant");
const StudentService = {
  Create: (payload) => {
    return new Promise((resolve, reject) => {
      StudentDAO.Create(payload)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.CREATED,
            message: CONSTANT.MESSAGE.STUDENT.CREATED,
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
      StudentDAO.List()
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
module.exports = StudentService;
