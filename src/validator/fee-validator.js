const FeeValidateSchema = require("../validator-schema/fee-validate");
const CONSTANT = require("../utils/constant");
const FeeValidate = {
  feeValidate: (req, res, next) => {
    let { value, error } = FeeValidateSchema.validate(req.body);
    if (error)
      return res.status(CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST).send({
        status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
        message: error.details[0].message,
      });
    next();
  },
};

module.exports = FeeValidate;
