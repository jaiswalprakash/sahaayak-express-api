const UserDAO = require("../dao/user-dao");
const CONSTANT = require("../utils/constant");
const UserService = {
  registerUser: (payload) => {
    return new Promise((resolve, reject) => {
      UserDAO.registerUser(payload)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.CREATED,
            message: CONSTANT.MESSAGE.USER.CREATED,
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
  isUserExist: (payload) => {
    return new Promise((resolve, reject) => {
      UserDAO.isUserExist(payload)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
            message: CONSTANT.MESSAGE.USER.USER_ALREADY_REGISTERED,
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
      UserDAO.List(orgId)
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

  Delete: async (user) => {
    try {
      let result = await UserDAO.delete(user);
      if (result.deletedCount) {
        return {
          status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
          message: CONSTANT.MESSAGE.STUDENT.DELETE,
          data: result,
        };
      }
    } catch (error) {
      console.log("error c=>", error);
      throw {
        status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
        message: CONSTANT.MESSAGE.COMMON.SERVER_ERROR,
      };
    }
  },
};

module.exports = UserService;
