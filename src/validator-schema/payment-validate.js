const Joi = require("joi");
const PaymentValidateSchema = Joi.object({
  studentId: Joi.string().required(),
  attendanceDate: Joi.date().required(),
  amountPaid: Joi.number().required(),
  description: Joi.string(),
});

module.exports = PaymentValidateSchema;
