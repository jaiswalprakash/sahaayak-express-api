const PaymentValidateSchema = require("../validator-schema/payment-validate");
const CONSTANT = require("../utils/constant");
const PaymentValidate = {
  paymentValidate: (req, res, next) => {
    let { value, error } = PaymentValidateSchema.validate(req.body);
    if (error)
      return res.status(CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST).send({
        status: CONSTANT.HTTP_STATUS_CODE.BAD_REQUEST,
        message: error.details[0].message,
      });
    next();
  },
};

module.exports = PaymentValidate;
