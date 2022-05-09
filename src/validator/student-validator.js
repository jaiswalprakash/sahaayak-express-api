const StudentValidateSchema = require("../validator-schema/student-validate");
const CONSTANT = require("../utils/constant");
const StudentValidate = {
  studentValidate: (req, res, next) => {
    let { value, error } = StudentValidateSchema.validate(req.body);
    if (error)
      return res.status(CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST).send({
        status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
        message: error.details[0].message,
      });
    next();
  },
};

module.exports = StudentValidate;
