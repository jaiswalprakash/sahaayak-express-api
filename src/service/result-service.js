const ResultDAO = require("../dao/result-dao");
const CONSTANT = require("../utils/constant");

const ResultService = {
  generate: async (payload) => {
    try {
      let result = await ResultDAO.Create(payload);
      return {
        status: CONSTANT.HTTP_STATUS_CODE.CREATED,
        message: CONSTANT.MESSAGE.RESULT.CREATED,
        data: result,
      };
    } catch (error) {
      console.log("error", error);
      throw {
        status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
        message: error,
      };
    }
  },
  List: (orgId = null) => {
    return new Promise((resolve, reject) => {
      ResultDAO.List(orgId)
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
module.exports = ResultService;
