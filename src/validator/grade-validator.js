const GradeValidateSchema = require("../validator-schema/grade-validate");
const CONSTANT = require("../utils/constant");
const GradeValidate = {
  gradeValidate: (req, res, next) => {
    let { value, error } = GradeValidateSchema.validate(req.body);
    if (error)
      return res.status(CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST).send({
        status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
        message: error.details[0].message,
      });
    next();
  },
};

module.exports = GradeValidate;
