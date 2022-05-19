const Joi = require("joi");
const FeeValidateSchema = Joi.object({
  grade: Joi.string().required(),
  feeStructure: Joi.object({
    totalAmount: Joi.number().required(),
    onceYear: Joi.object({
      yearAmount: Joi.number(),
      breakDown: Joi.array().items({
        label: Joi.string(),
        amount: Joi.number(),
      }),
    }),
    monthly: Joi.object({
      monthAmount: Joi.number(),
      breakDown: Joi.array().items({
        label: Joi.string(),
        amount: Joi.number(),
      }),
    }),
  }).required(),
});
module.exports = FeeValidateSchema;
