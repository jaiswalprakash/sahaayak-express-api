const FeeDAO = require("../dao/fee-dao");
const CONSTANT = require("../utils/constant");
const FeeService = {
  Create: (payload) => {
    return new Promise((resolve, reject) => {
      FeeDAO.Create(payload)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.CREATED,
            message: CONSTANT.MESSAGE.FEE.CREATED,
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
      FeeDAO.List(orgId)
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
  Detail: (id) => {
    return new Promise((resolve, reject) => {
      FeeDAO.Detail(id)
        .then((result) => {
          if (result.length > 0) {
            resolve({
              status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
              message: CONSTANT.MESSAGE.COMMON.DATA_FOUND,
              data: result,
            });
          } else {
            reject({
              status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
              message: CONSTANT.MESSAGE.COMMON.MESSAGE_DATA_NOT_FOUND,
            });
          }
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

module.exports = FeeService;
