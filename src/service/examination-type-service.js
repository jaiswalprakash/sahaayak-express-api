const ExaminationTypeDAO = require("../dao/examination-type-dao");
const CONSTANT = require("../utils/constant");

const ExaminationTypeService = {
  Create: async (payload) => {
    try {
      let result = await ExaminationTypeDAO.Create(payload);
      return {
        status: CONSTANT.HTTP_STATUS_CODE.CREATED,
        message: CONSTANT.MESSAGE.EXAMINATION_TYPE.CREATED,
        data: result,
      };
    } catch (error) {
      throw {
        status: CONSTANT.HTTP_STATUS_CODE.SERVER_ERROR,
        message: error,
      };
    }
  },
};

module.exports = ExaminationTypeService;
