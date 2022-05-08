const Joi = require("joi");
const CONSTANT = require("../utils/constant");
const GradeValidateSchema = Joi.object({
  name: Joi.number().required(),
  subjects: Joi.array().required(),
  orgId: Joi.isRef(CONSTANT.COLLECTION.ORIGANIZATION),
});

module.exports = GradeValidateSchema;
