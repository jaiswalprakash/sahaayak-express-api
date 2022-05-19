const StudentDAO = require("../dao/student-dao");
const CONSTANT = require("../utils/constant");
const OriganizationService = require("../service/origanization-service");
const GradeService = require("../service/grade-service");
const { count } = require("../model/grade-model");

const StudentService = {
  Create: (payload, orgId) => {
    // let UUID = StudentService.GenerateUUID(orgId, payload.grade);
    // console.log("uuid", UUID);
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
  List: (orgId = null) => {
    return new Promise((resolve, reject) => {
      StudentDAO.List(orgId)
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
  // GenerateUUID: (orgId, gradeId) => {
  //   let orgDetail;
  //   let gradeDetail;
  //   OriganizationService.Detail(orgId).then((result) => {
  //     console.log();
  //     orgDetail = result;
  //   });
  //   GradeService.Detail(gradeId).then((result) => {
  //     gradeDetail = result;
  //   });
  //   console.log("orgDetail", orgDetail);
  //   console.log("gradeDetail", gradeDetail);
  //   return (
  //     orgDetail.name.slice(0, 3) +
  //     "G" +
  //     gradeDetail.name +
  //     Math.floor(100 + Math.random() * 900)
  //   ).toLowerCase();
  // },
};
module.exports = StudentService;
