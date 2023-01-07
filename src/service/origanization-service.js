const OriganizationDAO = require("../dao/origanization-dao");
const CONSTANT = require("../utils/constant");
const UserService = require("../service/user-service");
const OriganizationService = {
  Create: async (payload) => {
    /*  when origanization is created create user
          email:org-email,
          role:ADMIN ,
          orgid:created orgid, 
          name:organizatiomname+admin,
          password:name+123,
          and send email to that email login Credential(for noe console the creditional)
      */
    try {
      let result = await OriganizationDAO.Create(payload);

      let adminForOrgDetail = {
        email: result.email,
        role: "ADMIN",
        orgId: result._id,
        name: result.name + " " + "Admin",
        userName: result.name + "@" + "Admin",
        password: result.name + "@" + 123,
      };
      let adminForOrg = await UserService.registerUser(adminForOrgDetail);
      console.log("org admin login detail", {
        email: adminForOrg.email,
        password: adminForOrgDetail.password,
      });
      return {
        status: CONSTANT.HTTP_STATUS_CODE.CREATED,
        message: CONSTANT.MESSAGE.ORIGANIZATION.CREATED,
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

module.exports = OriganizationService;
