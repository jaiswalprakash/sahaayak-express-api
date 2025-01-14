const Joi = require("joi");
const GradeValidateSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.object({
    country: Joi.string(),
    state: Joi.string(),
    city: Joi.string(),
  }).required(),
  registration_number: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

module.exports = GradeValidateSchema;
