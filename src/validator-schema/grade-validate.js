const Joi = require("joi");
const CONSTANT = require("../utils/constant");
const GradeValidateSchema = Joi.object({
  name: Joi.number().required(),
  subjects: Joi.array().required(),
  orgId: Joi.string(),
});

module.exports = GradeValidateSchema;
