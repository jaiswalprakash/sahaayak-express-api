const OriganizationDAO = require("../dao/origanization-dao");
const CONSTANT = require("../utils/constant");
const OriganizationService = {
  Create: (payload) => {
    return new Promise((resolve, reject) => {
      /*  when origanization is created create user
          email:org-email,
          role:ADMIN ,
          orgid:created orgid, 
          name:organizatiomname+admin,
          password:name+123,
          and send email to that email login Credential(for noe console the creditional)
      */
      OriganizationDAO.Create(payload)
        .then((result) => {
          resolve({
            status: CONSTANT.HTTP_STATUS_CODE.CREATED,
            message: CONSTANT.MESSAGE.ORIGANIZATION.CREATED,
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
      OriganizationDAO.List()
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
      OriganizationDAO.Detail(id)
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

module.exports = OriganizationService;
