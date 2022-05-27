const StudentDAO = require("../dao/student-dao");
const CONSTANT = require("../utils/constant");
const OriganizationService = require("../service/origanization-service");
const GradeService = require("../service/grade-service");
const ParentService = require("../service/parent-service");

const StudentService = {
  Create: async (payload) => {
    await generateUUID(payload).then((result) => {
      payload.uuid = result;
    });
    let parentsPayload = [...payload.parents];
    parentsPayload.map((e) => {
      e["orgId"] = payload.orgId;
    });
    await ParentService.Create(parentsPayload).then((result) => {
      let parentsRecord = [];
      result.data.forEach((e) => {
        parentsRecord.push(e._id);
      });
      payload.parents = [...parentsRecord];
    });
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
};

generateUUID = async (payload) => {
  try {
    let gender = payload.gender == "MALE" ? "M" : "F";
    let orgDetail = await OriganizationService.Detail(payload.orgId);
    let gradeDetail = await GradeService.Detail(payload.grade);
    let studentDetail = await StudentService.List(payload.orgId);
    let roleNumber = studentDetail.data.length + 1;
    let UUID = (
      orgDetail.data[0].name.slice(0, 3) +
      "G" +
      gradeDetail.data[0].name +
      gender +
      padNumber(roleNumber, 3)
    ).toUpperCase();
    return UUID;
  } catch (error) {
    console.log(error);
  }
};
padNumber = (n, length) => {
  var len = length - ("" + n).length;
  return (len > 0 ? new Array(++len).join("0") : "") + n;
};
module.exports = StudentService;
