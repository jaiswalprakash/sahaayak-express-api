const CONSTANT = require("../utils/constant");
const userDAO = require("../dao/user-dao");
const jwt = require("jsonwebtoken");
const AuthService = {
  //API to Login
  signIn: (userDetail) => {
    return new Promise((resolve, reject) => {
      if (!userDetail.email || !userDetail.password) {
        reject({
          status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
          message: CONSTANT.MESSAGE.COMMON.MESSAGE_INVALID_DATA,
        });
      }
      userDAO
        .isUserExist({ email: userDetail.email })
        .then((userData) => {
          if (userData) {
            let isMatched = userDAO.comparePassword(
              userDetail.password,
              userData.password
            );
            if (isMatched) {
              try {
                const payLoad = {
                  _id: userData._id,
                  email: userData.email,
                  name: userData.name,
                  role: userData.role,
                };
                const _token = jwt.sign(payLoad, CONSTANT.JWT.SECRET, {
                  expiresIn: CONSTANT.JWT.TOKEN_TIMEOUT,
                });
                delete userData._doc.password;
                resolve({
                  status: CONSTANT.HTTP_STATUS_CODE.SUCCESS,
                  message: CONSTANT.MESSAGE.USER.LOGIN_SUCCESS,
                  data: {
                    accessToken: _token,
                    expiry: CONSTANT.JWT.TOKEN_TIMEOUT,
                  },
                });
              } catch (error) {
                reject({
                  status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
                  message: CONSTANT.MESSAGE.COMMON.SERVER_ERROR,
                });
              }
            } else {
              reject({
                status: CONSTANT.HTTP_STATUS_CODE.INVALID_CREDENTIAL,
                message: CONSTANT.MESSAGE.USER.MESSAGE_INVALID_CREDENTIALS,
              });
            }
          } else {
            reject({
              status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
              message: CONSTANT.MESSAGE.USER.NOT_REGISTERED,
            });
          }
        })
        .catch((error) => {
          console.log("error", error);
          reject({
            status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
            message: CONSTANT.MESSAGE.COMMON.SERVER_ERROR,
          });
        });
    });
  },
};

module.exports = AuthService;
