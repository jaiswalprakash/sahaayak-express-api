const StudentDAO = require("../dao/student-dao");
const CONSTANT = require("../utils/constant");
const OriganizationService = require("../service/origanization-service");
const GradeService = require("../service/grade-service");
const ParentService = require("../service/parent-service");

const StudentService = {
  Create: async (payload) => {
    try {
      let uuid = await generateUUID(payload);
      payload.uuid = uuid;
      let parentsPayload = [...payload.parents];
      parentsPayload.map((e) => {
        e.orgId = payload.orgId;
      });
      let parentResult = await ParentService.Create(parentsPayload);
      let parentsRecord = [];
      parentResult.data.forEach((e) => {
        parentsRecord.push(e._id);
      });
      payload.parents = [...parentsRecord];
      let result = await StudentDAO.Create(payload);
      return {
        status: CONSTANT.HTTP_STATUS_CODE.CREATED,
        message: CONSTANT.MESSAGE.STUDENT.CREATED,
        data: result,
      };
    } catch (error) {
      console.log("error c=>", error);
      throw {
        status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
        message: CONSTANT.MESSAGE.COMMON.SERVER_ERROR,
      };
    }
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
  studentInfo: async (orgId, uuid) => {
    let studentInfo = await StudentDAO.studentInfo(orgId, uuid);
    return {
      status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
      message: CONSTANT.MESSAGE.STUDENT.FETCHED,
      data: studentInfo,
    };
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
    throw {
      status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
      message: error.message,
    };
  }
};
padNumber = (n, length) => {
  var len = length - ("" + n).length;
  return (len > 0 ? new Array(++len).join("0") : "") + n;
};
module.exports = StudentService;
