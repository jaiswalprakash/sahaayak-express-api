const OriganizationValidateSchema = require("../validator-schema/origanization-validate");
const CONSTANT = require("../utils/constant");
const OriganizationValidate = {
  OriganizationValidate: (req, res, next) => {
    let { value, error } = OriganizationValidateSchema.validate(req.body);
    if (error)
      return res.status(CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST).send({
        status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
        message: error.details[0].message,
      });
    next();
  },
};

module.exports = OriganizationValidate;
